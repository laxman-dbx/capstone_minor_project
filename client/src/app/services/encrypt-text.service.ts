import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EncryptTextService {
  token=localStorage.getItem("authToken");

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  encryptText(id: string, receiverId: string, text: string): Observable<{ encryptedText: string }> {
    return this.http.post<{ encryptedText: string }>(`${this.baseUrl}/encrypt/encrypt-text`, {
      id,
      receiverId,
      text
    });
  }

  decryptText(encryptedText: string): Observable<{ decryptedText: string }> {
    return this.http.post<{ decryptedText: string }>(`${this.baseUrl}/encrypt/decrypt-text`, {
      encryptedText
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:5000/api/users/getUsers`,{
      headers:{Authorization:`Bearer ${this.token}`}
    });
  }
}
