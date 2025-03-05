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

    // Create form data
    const formData = new FormData();
    formData.append('documentType', data.documentType);
    formData.append('file', data.file);
    formData.append('isSave', data.isSave.toString());

    try {
        const response = await axios.post(`${this.apiUrl}/upload`, formData, {
            headers: { Authorization: `Bearer ${this.token}` },
            responseType: 'blob' // Always request as 'blob' to handle both cases
        });

        // Convert the blob response to text first to check if it's JSON
        const textResponse = await response.data.text();
        try {
            const jsonData = JSON.parse(textResponse);

            // Handle "No PII Data Found" case
            if (jsonData?.message?.includes("No PII data found")) {
                return { message: jsonData.message, isNoPII: true };
            }

            return jsonData;
        } catch (error) {
            // If parsing fails, it's a file response, return as blob
            return {
                directBlob: response.data,
                fileType: response.headers['content-type'],
                fileName: data.file.name // Preserve filename for download
            };
        }
    } catch (error) {
        console.error("Error in uploadDocument service:", error);
        throw error;
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

