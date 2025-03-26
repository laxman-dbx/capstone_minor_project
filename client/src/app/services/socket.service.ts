import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';
import { UserTicket } from '../models/support.model';

export interface ChatMessage {
  sender: 'admin' | 'user';
  message: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket!: Socket;
  private _messages: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<
    ChatMessage[]
  >([]);
  public messages$: Observable<ChatMessage[]> = this._messages.asObservable();

  constructor(private authService: AuthService) {}

  connect() {
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token available.  Cannot connect to socket.');
      return;
    }
    this.socket = io(environment.apiUrl, {
      auth: {
        token: token,
      },
    });

    this.socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
  }

  joinChat(ticket: UserTicket) {
    this._messages.next(ticket.messages);

    // Listen for messages related to *this* ticket.  Crucial for multiple tickets.
    this.socket.on(`chatMessage_${ticket._id}`, (message: ChatMessage) => {
      // Add the new message to the existing array.  Don't replace!
      const currentMessages = this._messages.getValue();
      this._messages.next([...currentMessages, message]);
    });
  }
  leaveChat(ticketId: string) {
    this.socket.off(`chatMessage_${ticketId}`);
  }

  sendMessage(ticketId: string, message: string) {
    this.socket.emit('sendMessage', { ticketId, message }, (response: any) => {
      if (response.error) {
        console.error('Error sending message:', response.error);
        // Handle the error (e.g., show a message to the user)
      } else {
        console.log('response', response);
      }
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  getMessages(): Observable<ChatMessage[]> {
    return this.messages$;
  }
}
