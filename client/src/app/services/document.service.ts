import { Injectable } from '@angular/core';
import axios from 'axios';
import { uploadDocument } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {
  private apiUrl = 'http://localhost:5000/api/documents';
  token=localStorage.getItem("authToken");

  //  Upload document
  async uploadDocument(data: uploadDocument): Promise<any> {
    console.log(data);
    
    // Create form data
    const formData = new FormData();
    formData.append('documentType', data.documentType);
    formData.append('file', data.file);
    formData.append('isSave', data.isSave.toString());
    
    // If not saving to S3, we need to handle the direct file response
    if (data.isSave === false) {
      const response = await axios.post(`${this.apiUrl}/upload`, formData, {
        headers: { 
          Authorization: `Bearer ${this.token}`
        },
        responseType: 'blob' // Important: This tells axios to expect binary data
      });
      
      // Return an object with the blob directly
      return {
        directBlob: response.data,
        fileType: response.headers['content-type'],
        fileName: data.file.name // Pass the original filename to help with naming
      };
    } else {
      // Regular JSON response when saving to S3
      const response = await axios.post(`${this.apiUrl}/upload`, formData, {
        headers: { 
          Authorization: `Bearer ${this.token}`
        }
      });
      
      return response.data;
    }
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

