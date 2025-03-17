import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EncryptTextService {
  private token = localStorage.getItem("authToken");
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  encryptText(id: string, receiverIds: string[], text: string): Observable<{ encryptedText: string, encryptedMessageId: string }> {
    return this.http.post<{ encryptedText: string ,encryptedMessageId:string}>(`${this.baseUrl}/api/users/encrypt-text`, {
      id,
      receiverIds,
      text
    }, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
  }

  decryptText(dataId: string): Observable<{ text: string }> {
    return this.http.post<{ text: string }>(`${this.baseUrl}/api/users/decrypt-text`, {
      dataId
    }, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/api/users/getUsers`, {
      headers: { Authorization: `Bearer ${this.token}` }
    });
  }

  getSharedByMe(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/users/shared-by-me`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` })
    });
  }

  getSharedWithMe(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/users/shared-to-me`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` })
    });
  }

  deleteSharedMessage(messageId: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/api/users/deleteEntry/${messageId}`, {
      headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` })
    });
  }

}