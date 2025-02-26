import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../../services/document.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-documents',
  imports: [CommonModule,RouterModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'] // ✅ Fixed property name
})
export class DocumentsComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService) {}

  async ngOnInit(): Promise<void> {
    await this.getFiles();
  }

  async getFiles() {
    try {
      const response = await this.documentService.getUserDocuments();
      this.documents=response.documents;
      console.log('Fetched documents:', this.documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  }

  async uploadFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await this.documentService.uploadDocument(file);
      console.log('File uploaded successfully!');
      await this.getFiles(); // ✅ Refresh file list after upload
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

  async downloadFile(fileKey: string) {
    try {
      const blob = await this.documentService.downloadDocument(fileKey);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileKey; // ✅ Proper download
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      console.log('File downloaded:', fileKey);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  async deleteFile(fileKey: string) {
    try {
      await this.documentService.deleteDocument(fileKey);
      console.log('File deleted successfully!');
      await this.getFiles(); // ✅ Refresh list after deletion
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }
}
