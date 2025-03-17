import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import axios from 'axios';
import { FullAnalyticsResponse, ActivityLogsResponse } from '../models/analtics.models';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AdminService {
  private apiUrl = `${environment.apiUrl}/api/admin`;
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
      this.http.put<{ success: boolean }>(`${this.apiUrl}/tickets/${ticketId}/status`,{status},{
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }


  async getFullAnalytics(): Promise<FullAnalyticsResponse> {
    return firstValueFrom(
      this.http.get<FullAnalyticsResponse>(`${environment.apiUrl}/api/analytics/admin/analytics/full`, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  async getActivityLogs(page: number = 1, limit: number = 20, userId?: string): Promise<ActivityLogsResponse> {
    let url = `${environment.apiUrl}/api/analytics/admin/analytics/activity-logs?page=${page}&limit=${limit}`;
    
    if (userId) {
      url += `&email=${userId}`;
    }
    
    return firstValueFrom(
      this.http.get<ActivityLogsResponse>(url, {
        headers: { Authorization: `Bearer ${this.token}` }
      })
    );
  }

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLoginStatus());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  


  // Admin Signin Method
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