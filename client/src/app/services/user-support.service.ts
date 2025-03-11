import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTicketService {
  private apiUrl = 'http://localhost:5000/api/tickets';
  private token = localStorage.getItem('authToken');

  constructor(private http: HttpClient) {}

  async getUserTickets() {
    return firstValueFrom(
      this.http.get(`${this.apiUrl}/user`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async createTicket(ticketData: { issue: string; priority: string }) {
    return firstValueFrom(
      this.http.post(`${this.apiUrl}`, ticketData, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async getTicketMessages(ticketId: string) {
    return firstValueFrom(
      this.http.get(`${this.apiUrl}/${ticketId}/messages`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }
}