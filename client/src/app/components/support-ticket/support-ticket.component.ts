// user-support-ticket.component.ts (CORRECTED)
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTicketService } from '../../services/user-support.service';
import { SocketService } from '../../services/socket.service';
import { UserTicket, Message } from '../../models/support.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-support-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css'],
})
export class SupportTicketComponent implements OnInit, OnDestroy {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  tickets: UserTicket[] = [];
  selectedTicket: UserTicket | null = null;
  newMessage: string = '';
  newTicket = { issue: '', priority: 'low' }; // For creating new tickets
  loading: boolean = false;
  ticketId: string = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private userTicketService: UserTicketService,
    private socketService: SocketService,
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.ticketId = navigation.extras.state['ticketId'];
    }
  }

  private messagesSubscription!: Subscription;

  ngOnInit() {
    this.loadTickets().then(() => {
      if (this.ticketId) {
        this.selectTicket(this.ticketId);
      }
    });
    this.socketService.connect(); // Connect when component initializes

    // This subscription is still useful for *initial* loading, but joinChat is the key.
    this.messagesSubscription = this.socketService
      .getMessages()
      .subscribe((messages) => {
        if (this.selectedTicket) {
          // Only update if a ticket is selected
          this.selectedTicket.messages = messages;
          this.cdRef.detectChanges();
          this.scrollToBottom();
        }
      });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
    this.messagesSubscription?.unsubscribe();
    if (this.selectedTicket) {
      this.socketService.leaveChat(this.selectedTicket._id); // IMPORTANT: Leave the chat on destroy
    }
    this.socketService.disconnect();
  }

  async loadTickets() {
    this.loading = true;
    try {
      const response = await this.userTicketService.getUserTickets();
      this.tickets = response as UserTicket[];
      this.tickets.sort((a, b) => {
        const statusPriority = { open: 0, 'in-progress': 1, resolved: 2 };
        if (statusPriority[a.status] !== statusPriority[b.status]) {
          return statusPriority[a.status] - statusPriority[b.status];
        }
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      this.cdRef.detectChanges();
    } catch (error) {
      console.error('Failed to load tickets:', error);
    } finally {
      this.loading = false;
    }
  }

  async createTicket() {
    if (!this.newTicket.issue.trim()) {
      return; // Basic validation
    }

    this.loading = true;
    try {
      await this.userTicketService.createTicket(this.newTicket);
      this.loadTickets();
      this.newTicket = { issue: '', priority: 'low' }; // Reset form
    } catch (error) {
      console.error('Failed to create ticket:', error);
    } finally {
      this.loading = false;
    }
  }

  async selectTicket(ticketId: string) {
    if (!ticketId) return;

    const ticket = this.tickets.find((t) => t._id === ticketId);
    if (!ticket) {
      console.error('Ticket not found');
      return;
    }

    // Leave the previous chat (if any)
    if (this.selectedTicket) {
      this.socketService.leaveChat(this.selectedTicket._id);
    }

    this.selectedTicket = ticket;
    this.socketService.joinChat(this.selectedTicket); // JOIN THE CHAT HERE!  This is the fix.
    this.scrollToBottom();
  }

  async sendMessage() {
    if (
      !this.selectedTicket ||
      !this.newMessage.trim() ||
      this.isTicketResolved()
    )
      return;

    const messageData: Message = {
      ticketId: this.selectedTicket._id,
      sender: 'user',
      message: this.newMessage,
      timestamp: new Date(),
    };

    // Optimistic UI update (add message *before* sending)
    this.selectedTicket.messages = this.selectedTicket.messages || [];
    this.cdRef.detectChanges();
    this.newMessage = ''; // Clear input

    try {
      await this.socketService.sendMessage(
        messageData.ticketId!,
        messageData.message,
      );
      this.scrollToBottom();
    } catch (error) {
      console.error('Failed to send message:', error);
      // Rollback: Remove the message if sending failed.
      this.selectedTicket.messages = this.selectedTicket.messages.filter(
        (m) => m !== messageData,
      );
      this.cdRef.detectChanges();
    }
  }

  private scrollToBottom(): void {
    if (this.messageContainer) {
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTop =
          this.messageContainer.nativeElement.scrollHeight;
      }, 0);
    }
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace('_', '-');
  }

  getPriorityClass(priority: string): string {
    return priority.toLowerCase();
  }

  isTicketResolved(): boolean {
    return this.selectedTicket?.status === 'resolved';
  }
}
