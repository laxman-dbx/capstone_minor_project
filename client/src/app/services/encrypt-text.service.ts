import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EncryptTextService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  private getToken(): string {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.warn('Auth token not found');
    }
    return token || '';
  }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({ Authorization: `Bearer ${this.getToken()}` });
  }

  private handleError(error: any, defaultMessage: string): Observable<never> {
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

    return throwError(() => error);
  }

  encryptText(
    id: string,
    receiverIds: string[],
    text: string,
  ): Observable<{ encryptedText: string; encryptedMessageId: string }> {
    return this.http
      .post<{
        encryptedText: string;
        encryptedMessageId: string;
      }>(
        `${this.baseUrl}/api/users/encrypt-text`,
        { id, receiverIds, text },
        { headers: this.getAuthHeaders() },
      )
      .pipe(catchError((error) => this.handleError(error, 'Error encrypting text')));
  }

  decryptText(dataId: string): Observable<{ text: string }> {
    return this.http
      .post<{ text: string }>(
        `${this.baseUrl}/api/users/decrypt-text`,
        { dataId },
        { headers: this.getAuthHeaders() },
      )
      .pipe(catchError((error) => this.handleError(error, 'Error decrypting text')));
  }

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}/api/users/getUsers`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError((error) => this.handleError(error, 'Error fetching users')));
  }

  getSharedByMe(): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/api/users/shared-by-me`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError((error) => this.handleError(error, 'Error fetching shared-by-me data')));
  }

  getSharedWithMe(): Observable<any> {
    return this.http
      .get<any>(`${this.baseUrl}/api/users/shared-to-me`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError((error) => this.handleError(error, 'Error fetching shared-with-me data')));
  }

  deleteSharedMessage(messageId: string): Observable<any> {
    return this.http
      .delete<any>(`${this.baseUrl}/api/users/deleteEntry/${messageId}`, {
        headers: this.getAuthHeaders(),
      })
      .pipe(catchError((error) => this.handleError(error, 'Error deleting shared message')));
  }
}
