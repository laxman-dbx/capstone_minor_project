// admin-support-ticket.component.ts (CORRECTED)
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { SocketService } from '../../../services/socket.service';
import { UserTicket, Message } from '../../../models/support.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-support-ticket',
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
  loading = false;

  private subscriptions: Subscription[] = [];

  constructor(
    private adminService: AdminService,
    private socketService: SocketService,
    private cdRef: ChangeDetectorRef,
  ) {}

  private messagesSubscription!: Subscription;

  ngOnInit() {
    this.loadTickets();
    this.socketService.connect(); // Connect when component initializes

    // Subscribe to message updates.
    this.messagesSubscription = this.socketService.getMessages().subscribe((messages) => {
      // Check if we have a selected ticket *and* the messages are for that ticket.
      if (this.selectedTicket) {
          this.selectedTicket.messages = messages;  //UPDATE Messages
           this.cdRef.detectChanges(); // Trigger change detection
           this.scrollToBottom();
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
    this.messagesSubscription?.unsubscribe();
    if (this.selectedTicket) {
        this.socketService.leaveChat(this.selectedTicket._id);
    }
    this.socketService.disconnect(); // ALWAYS disconnect
  }

  async loadTickets() {
    this.loading = true;
    try {
      this.tickets = await this.adminService.getTickets() as UserTicket[];
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
      console.error("Failed to load tickets:", error);
    } finally {
      this.loading = false;
    }
  }

  async selectTicket(ticket: UserTicket) {
    // Leave any previously selected ticket's chat
    if (this.selectedTicket) {
      this.socketService.leaveChat(this.selectedTicket._id);
    }

    this.selectedTicket = ticket;
    this.socketService.joinChat(ticket); // Join the chat for the *newly* selected ticket
    this.scrollToBottom();
  }

  async sendMessage() {
    if (!this.selectedTicket || !this.newMessage.trim() || this.isTicketResolved()) return;

    const messageData: Message = {
      ticketId: this.selectedTicket._id,
      sender: 'admin',
      message: this.newMessage,
      timestamp: new Date(),
    };

    // Optimistic UI update (add message *before* sending)
    this.selectedTicket.messages = this.selectedTicket.messages || [];
    this.cdRef.detectChanges();
    this.scrollToBottom();
    this.newMessage = ''; // Clear input

    try {
      await this.socketService.sendMessage(messageData.ticketId!, messageData.message);
      this.scrollToBottom();
    } catch (error) {
      console.error('Failed to send message:', error);
      // Rollback: Remove the message if sending failed.
      this.selectedTicket.messages = this.selectedTicket.messages.filter(m => m !== messageData);
      this.cdRef.detectChanges();
    }
  }

  async updateTicketStatus(ticketId: string, status: 'open' | 'in-progress' | 'resolved') {
    try {
      await this.adminService.updateTicketStatus(ticketId, status);
      await this.loadTickets(); // Reload tickets
      if (this.selectedTicket && this.selectedTicket._id === ticketId) {
        const updatedTicket = this.tickets.find(t => t._id === ticketId);
        if (updatedTicket) {
          this.selectedTicket = updatedTicket; // Update selected ticket
          this.cdRef.detectChanges();
        }
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  }

  private scrollToBottom(): void {
    if (this.messageContainer) {
      setTimeout(() => {
        this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
      }, 0);
    }
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  getPriorityClass(priority: string): string {
    return `priority-${priority.toLowerCase()}`;
  }

  isTicketResolved(): boolean {
    return this.selectedTicket?.status === 'resolved';
  }

  getUserName(ticket: UserTicket): string {
    if (ticket.user && typeof ticket.user === 'object' && ticket.user.name) {
      return ticket.user.name;
    }
    if (
      ticket.userId &&
      typeof ticket.userId === 'object' &&
      ticket.userId.name
    ) {
      return ticket.userId.name;
    }
    return 'User';
  }

  displayUserInfo(ticket: UserTicket): string {
    if (ticket.user && typeof ticket.user === 'object') {
      return `${ticket.user.name} (${ticket.user.email})`;
    }

    if (ticket.userId && typeof ticket.userId === 'object') {
      return `${ticket.userId.name} (${ticket.userId.email})`;
    }
    return `User ID: ${typeof ticket.user === 'string'
      ? ticket.user
      : typeof ticket.userId === 'string'
        ? ticket.userId
        : 'Unknown'
      }`;
  }
}