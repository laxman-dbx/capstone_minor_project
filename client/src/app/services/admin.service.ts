import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import axios from 'axios';

export interface DocumentTypeCount {
  _id: string;
  count: number;
}

export interface DocumentAnalytics {
  total: number;
  byType: DocumentTypeCount[];
}

export interface DocumentAnalyticsResponse {
  documents: DocumentAnalytics;
}

export interface User{
  email:string,
  name:string,
  _id:string
}

export interface Ticket {
  _id: string;
  user: string;
  issue: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date,
  messages :any[],
  updatedAt:Date,
  userId:User,
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:5000/api/admin';
  private token = localStorage.getItem('authToken');

  constructor(private http: HttpClient) {}

  async getTickets() {
    return firstValueFrom(
      this.http.get(`${this.apiUrl}/tickets`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async updateTicketStatus(ticketId: string, status: 'open' | 'in-progress' | 'resolved') {
    return firstValueFrom(
      this.http.put<{ success: boolean }>(`${this.apiUrl}/tickets/${ticketId}`, { status }, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async getDocumentAnalytics(): Promise<DocumentAnalyticsResponse> {
    return firstValueFrom(
      this.http.get<DocumentAnalyticsResponse>(`${this.apiUrl}/analytics/documents`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async verifyUserPii(email: string, DocType: string, DocNumber: string) {
    return firstValueFrom(
      this.http.post(`${this.apiUrl}/verifyUserPii`, { email, DocType, DocNumber }, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }



  //admin-auth

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  


  // Signin Method
  async signIn(credentials: { email: string; password: string }) {
    try {
      const response = await axios.post(`${this.apiUrl}/signin`, credentials);
      this.storeToken(response.data.token);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || 'Login failed!';
    }
  }

  // Store Token
  storeToken(token: string) {
    localStorage.setItem('authToken', token);
    this.isLoggedInSubject.next(true);
  }

  // Get Token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Logout
  logout() {
    localStorage.removeItem('authToken');
    this.isLoggedInSubject.next(false);
  }

  checkLoginStatus(): boolean {
    return !!localStorage.getItem('authToken'); // Example check based on token
  }
}