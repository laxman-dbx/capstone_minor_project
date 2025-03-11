import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

interface Message {
  sender: 'user' | 'admin';
  message: string;
  timestamp: Date;
}

interface SendMessageData {
  recipient: string;
  message: string;
  ticketId?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private readonly SOCKET_URL = 'http://localhost:5000';

  constructor() {
    this.socket = io(this.SOCKET_URL, {
      auth: {
        token: localStorage.getItem('authToken')
      }
    });
  }

  listenToTicketUpdates(): Observable<any> {
    return new Observable(observer => {
      this.socket.on('ticketUpdate', data => {
        observer.next(data);
      });
    });
  }

  listenToMessages(): Observable<Message> {
    return new Observable(observer => {
      this.socket.on('chatMessage', data => {
        observer.next(data as Message);
      });
    });
  }

  sendMessage(data: SendMessageData): void {
    this.socket.emit('sendMessage', data);
  }

  async getChatHistory(ticketId: string): Promise<Message[]> {
    return new Promise((resolve, reject) => {
      this.socket.emit('getChatHistory', { ticketId }, (response: any) => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response.history);
        }
      });
    });
  }

  disconnect(): void {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}