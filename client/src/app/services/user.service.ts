import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Notification } from '../models/notification.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/api/users`;

  constructor(private http: HttpClient,private toastr: ToastrService) {}

  private getToken(): string {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('Auth token not found');
    }
    return token || '';
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

  async getUserProfile() {
    try {
      return await firstValueFrom(
        this.http.get(`${this.apiUrl}/profile`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error fetching user profile');
      throw error;
    }
  }

  async updateUserProfile(userData: any) {
    try {
      return await firstValueFrom(
        this.http.put(`${this.apiUrl}/profile`, userData, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error updating profile');
      throw error;
    }
  }

  async updateProfileImage(file: File) {
    try {
      const formData = new FormData();
      if (file) {
        formData.append('file', file);
      }
      return await firstValueFrom(
        this.http.post(`${this.apiUrl}/update-profile-image`, formData, {
          headers: {
            Authorization: `Bearer ${this.getToken()}`,
          },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error updating profile image');
      throw error;
    }
  }

  async changePassword(newPassword: string) {
    try {
      return await firstValueFrom(
        this.http.post(
          `${this.apiUrl}/change-password`,
          { password: newPassword },
          {
            headers: { Authorization: `Bearer ${this.getToken()}` },
          },
        ),
      );
    } catch (error) {
      this.handleError(error, 'Error changing password');
      throw error;
    }
  }

  async deleteUser() {
    try {
      return await firstValueFrom(
        this.http.delete(`${this.apiUrl}/delete`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
    } catch (error) {
      this.handleError(error, 'Error deleting user');
      throw error;
    }
  }

  async getUserNotifications(): Promise<Notification[]> {
    try {
      return await firstValueFrom(
        this.http.get<Notification[]>(`${this.apiUrl}/notifications`, {
          headers: { Authorization: `Bearer ${this.getToken()}` },
        }),
      );
    } catch (error) {
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
      this.handleError(error, 'Error marking notification as read');
    }
  }
}
