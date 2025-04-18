import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserTicketService {
  private apiUrl = `${environment.apiUrl}/api/tickets`;

  constructor(private http: HttpClient,private toastr: ToastrService) {}

  private getAuthToken(): string {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Auth token not found');
    }
    return token || '';
  }

  async getUserTickets() {
    try {
      return await firstValueFrom(
        this.http.get(`${this.apiUrl}/user`, {
          headers: { Authorization: `Bearer ${this.getAuthToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error fetching user tickets');
      throw error;
    }
  }

  async createTicket(ticketData: { issue: string; priority: string }) {
    try {
      return await firstValueFrom(
        this.http.post(`${this.apiUrl}`, ticketData, {
          headers: { Authorization: `Bearer ${this.getAuthToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error creating ticket');
      throw error;
    }
  }

  async getTicketMessages(ticketId: string) {
    try {
      return await firstValueFrom(
        this.http.get(`${this.apiUrl}/${ticketId}/messages`, {
          headers: { Authorization: `Bearer ${this.getAuthToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error fetching ticket messages');
      throw error;
    }
  }

  private handleError(error: any, defaultMessage: string): void {
    console.error(defaultMessage, error);

    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        this.toastr.error('Session expired. Please login again.', '', {
          positionClass: 'toast-top-center',
        });
        window.location.href = '/sign-in';
      } else {
        this.toastr.error(defaultMessage, '', {
          positionClass: 'toast-top-center',
        });
      }
    } else {
      this.toastr.error(defaultMessage, '', {
        positionClass: 'toast-top-center',
      });
    }
  }
}
