import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient) {}
  // Get updated token for each request
  private getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Get user profile
  async getUserProfile() {
    try {
      const response = await firstValueFrom(
        this.http.get(`${this.apiUrl}/profile`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
      return response;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }

  // Update user profile
  async updateUserProfile(userData: any) {
    try {
      const response = await firstValueFrom(
        this.http.put(`${this.apiUrl}/profile`, userData, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
      return response;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  // Update only the profile image
  async updateProfileImage(file: File) {
    try {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      }
      const response = await firstValueFrom(
        this.http.post(`${this.apiUrl}/update-profile-image`, formData, {
          headers: {
            Authorization: `Bearer ${this.getToken()}`,
          },
        }),
      );
      return response;
    } catch (error) {
      console.error('Error updating profile image:', error);
      throw error;
    }
  }

  // Change password
  async changePassword(newPassword: string) {
    try {
      const response = await firstValueFrom(
        this.http.post(
          `${this.apiUrl}/change-password`,
          { password: newPassword },
          {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          },
        ),
      );
      return response;
    } catch (error) {
      console.error('Error changing password:', error);
      throw error;
    }
  }

  // Delete user account
  async deleteUser() {
    try {
      const response = await firstValueFrom(
        this.http.delete(`${this.apiUrl}/delete`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
      return response;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  //get user Notifications

  async getUserNotifications(): Promise<Notification[]> {
    try {
      const response = await firstValueFrom(
        this.http.get<Notification[]>(`${this.apiUrl}/notifications`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
      return response;
    } catch (error) {
      console.error('Error fetching notifications:', error);
      return [];
    }
  }

  async markNotificationAsRead(notificationId: string): Promise<void> {
    try {
      await firstValueFrom(
        this.http.put(
          `${this.apiUrl}/notification/${notificationId}/read`,
          {},
          {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          },
        ),
      );
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  }
}
