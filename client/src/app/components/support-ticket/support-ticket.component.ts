import { Component, OnInit, ChangeDetectorRef, NgZone, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTicketService } from '../../services/user-support.service';
import { SocketService } from '../../services/socket.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

interface Message {
  sender: 'user' | 'admin';
  message: string;
  timestamp: Date;
}

interface UserTicket {
  _id: string;
  issue: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  messages: Message[];
  userId: {
    name: string;
    email: string;
  };
}

@Component({
  selector: 'app-user-support-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  tickets: UserTicket[] = [];
  newTicket = { issue: '', priority: 'low' as const };
  loading = false;
  selectedTicket: UserTicket | null = null;
  newMessage = '';
  error = '';
  private subscriptions: Subscription[] = [];

  constructor(
    private userTicketService: UserTicketService,
    private socketService: SocketService,
    private toastr: ToastrService,
    private cdRef: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.loadTickets();
    this.setupSocketListeners();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private setupSocketListeners() {
    // Message subscription
    this.subscriptions.push(
      this.socketService.listenToMessages().subscribe(message => {
        this.ngZone.run(() => {
          if (this.selectedTicket) {
            this.selectedTicket.messages.push(message);
            this.cdRef.detectChanges();
            this.scrollToBottom();
          }
        });
      })
    );

    // Ticket update subscription
    this.subscriptions.push(
      this.socketService.listenToTicketUpdates().subscribe(update => {
        this.ngZone.run(() => {
          this.tickets = this.tickets.map(ticket =>
            ticket._id === update.ticketId ? { ...ticket, status: update.status } : ticket
          );
          if (this.selectedTicket?._id === update.ticketId) {
            this.selectedTicket!.status = update.status;
          }
          this.toastr.info(`Ticket status updated to ${update.status}`);
          this.cdRef.detectChanges();
        });
      })
    );
  }

  private scrollToBottom(): void {
    try {
      setTimeout(() => {
        const element = this.messageContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }, 100);
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  async loadTickets() {
    try {
      this.loading = true;
      const response = await this.userTicketService.getUserTickets();
      this.tickets = response as UserTicket[];
      this.tickets.sort((a, b) => {
        const statusPriority = { open: 0, 'in-progress': 1, resolved: 2 };
        if (statusPriority[a.status] !== statusPriority[b.status]) {
          return statusPriority[a.status] - statusPriority[b.status];
        }
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    } catch (error) {
      this.toastr.error('Failed to load tickets');
      this.error = 'Failed to load tickets';
    } finally {
      this.loading = false;
      this.cdRef.detectChanges();
    }
  }

  async createTicket() {
    if (!this.newTicket.issue.trim()) {
      this.toastr.warning('Please describe your issue');
      return;
    }
    try {
      const response = await this.userTicketService.createTicket(this.newTicket);
      const ticket = response as UserTicket;
      this.tickets.unshift(ticket);
      this.newTicket.issue = '';
      this.toastr.success('Ticket created successfully');
      this.selectTicket(ticket);
      this.cdRef.detectChanges();
    } catch (error) {
      this.toastr.error('Failed to create ticket');
      this.error = 'Failed to create ticket';
    }
  }

  async selectTicket(ticket: UserTicket) {
    try {
      this.selectedTicket = ticket;
    } catch (error) {
      this.toastr.error('Failed to load messages');
      this.error = 'Failed to load messages';
    }
  }

  async sendMessage() {
    if (!this.selectedTicket || !this.newMessage.trim() || this.selectedTicket.status === 'resolved') {
      return;
    }
    const messageText = this.newMessage.trim();
    this.newMessage = '';
    try {
      await this.socketService.sendMessage({
        recipient: this.selectedTicket._id,
        message: messageText,
        ticketId: this.selectedTicket._id
      });
      
    } catch (error) {
      this.toastr.error('Failed to send message');
      this.error = 'Failed to send message';
    }
  }

  isTicketResolved(): boolean {
    return this.selectedTicket?.status === 'resolved';
  }

  getStatusClass(status: string): string {
    return status.toLowerCase().replace('_', '-');
  }

  getPriorityClass(priority: string): string {
    return priority.toLowerCase();
  }
}
