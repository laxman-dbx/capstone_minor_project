import { Component, Input, OnInit ,OnChanges, SimpleChanges } from '@angular/core';
import { DocumentService } from '../../../services/document.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: any[] = [];
  showPreview: boolean = false;
  filePreviewURL: string | null = null;
  selectedFile: string | null = null;
  isLoading: boolean = false;
  loadingMessage: string = '';
  previewTitle: string = 'Document Preview';
  
  // Loading messages for the interactive experience
  loadingMessages: string[] = [
    'Retrieving your document...',
    'Preparing for viewing...',
    'Almost there...',
    'Getting everything ready...',
    'Optimizing display...'
  ];
  
  loadingInterval: any;

  constructor(private documentService: DocumentService,private toastrService:ToastrService) {}

  async ngOnInit(): Promise<void> {
    await this.getFiles();
  }

  async getFiles(): Promise<void> {
    try {
      const response = await this.documentService.getUserDocuments();
      this.documents = response.documents;
      this.documents=this.documents.reverse();
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  }


  async downloadFile(fileKey: string): Promise<void> {
    if (!fileKey) return;
    
    try {
      this.setLoading(true, 'Preparing download...');
      const blob = await this.documentService.downloadDocument(fileKey);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileKey;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url); // Clean up
    } catch (error) {
      console.error('Error downloading file:', error);
    } finally {
      this.setLoading(false);
    }
  }

  async deleteFile(fileKey: string): Promise<void> {
    try {
      // Optional: Add confirmation dialog
      if (confirm('Are you sure you want to delete this file?')) {
        this.setLoading(true, 'Deleting document...');
        await this.documentService.deleteDocument(fileKey);
        this.toastrService.success('Deleted SuccessFully!','',{positionClass:"toast-top-left",timeOut:2000})
        await this.getFiles(); // Refresh list after deletion
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    } finally {
      this.setLoading(false);
    }
  }

  async openPreviewDialog(fileName: string): Promise<void> {
    try {
      this.selectedFile = fileName;
      
      // Set loading state with cycling messages
      this.setLoading(true);
      this.startLoadingAnimation();
      
      // Find the document to get the original name for the title
      const document = this.documents.find(doc => doc.maskedFileName === fileName);
      this.previewTitle = document?.originalName || 'Document Preview';
      
      // Simulate a slight delay to enhance the experience (optional)
      // This could be removed if your actual document loading is already slow enough
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const blob = await this.documentService.downloadDocument(fileName);
      const url = window.URL.createObjectURL(blob);
      this.filePreviewURL = url;
      
      // Stop loading and show the preview
      this.setLoading(false);
      this.showPreview = true;
    } catch (error) {
      console.error('Error opening preview:', error);
      this.setLoading(false);
    }
  }

  closePreviewDialog(event: Event): void {
    this.showPreview = false;
    
    // Clean up resources
    if (this.filePreviewURL) {
      window.URL.revokeObjectURL(this.filePreviewURL);
      this.filePreviewURL = null;
    }
    this.selectedFile = null;
  }
  
  setLoading(isLoading: boolean, message?: string): void {
    this.isLoading = isLoading;
    
    if (!isLoading) {
      // Clear the loading interval when loading is done
      if (this.loadingInterval) {
        clearInterval(this.loadingInterval);
        this.loadingInterval = null;
      }
    } else if (message) {
      this.loadingMessage = message;
    }
  }
  
  startLoadingAnimation(): void {
    let messageIndex = 0;
    
    // Set initial message
    this.loadingMessage = this.loadingMessages[messageIndex];
    
    // Cycle through loading messages every 1.5 seconds
    this.loadingInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % this.loadingMessages.length;
      this.loadingMessage = this.loadingMessages[messageIndex];
    }, 1500);
  }
  
  ngOnDestroy(): void {
    // Clean up on component destruction
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval);
    }
    
    if (this.filePreviewURL) {
      window.URL.revokeObjectURL(this.filePreviewURL);
    }
  }
}