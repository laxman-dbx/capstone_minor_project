import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private apiUrl = 'http://localhost:5000/api/documents';
  token=localStorage.getItem("authToken");

  //  Upload document
  async uploadDocument(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${this.apiUrl}/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data',
        Authorization:`Bearer ${this.token}`
       },
    });

    return response.data;
  }

  //  Get list of user documents
  async getUserDocuments(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/user-docs`, {
      headers:{Authorization:`Bearer ${this.token}`}
    });
    return response.data;
  }

  //  Download document
  async downloadDocument(fileKey: string): Promise<Blob> {
    const response = await axios.get(`${this.apiUrl}/download/${fileKey}`, {
      responseType : 'blob',
      headers:{
        Authorization:`Bearer ${this.token}`
      }
    });
    return response.data;
  }

  //  Delete document
  async deleteDocument(fileKey: string): Promise<any> {
    const response = await axios.delete(`${this.apiUrl}/delete/${fileKey}`, {headers:{Authorization:`Bearer ${this.token}`}});
    return response.data;
  }
}

