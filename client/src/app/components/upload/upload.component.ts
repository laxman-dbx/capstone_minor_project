import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DropfileinputComponent } from './dropfileinput/dropfileinput.component';
import { DocumentService } from '../../services/document.service';
import { FormsModule } from '@angular/forms';
import { uploadDocument } from '../../models/document.model';

interface FileEvent {
  files: File[];
}

type DocumentType = 'adhaar' | 'pan' | 'driving_license' | 'other' | 'bank';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  standalone: true,
  imports: [CommonModule, DropfileinputComponent,FormsModule]
})
export class UploadComponent {
  file: File | null = null;
  isUploading = false;
  isSuccess = false;
  isDownloading = false;
  errorMessage = '';
  fileUrl: SafeUrl | null = null;
  maskedBlob: Blob | null = null; 
  selectedDocumentType: DocumentType='adhaar';  // Assign a default value
  saveMaskedDocument: boolean = true;

  showTooltip: boolean = false;
  showTooltip2: boolean = false;
  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private documentService: DocumentService
    
  ) {}

  onFileChange(event: FileEvent) {
    if (!event.files.length) return;

    this.file = event.files[0];
    this.errorMessage = '';
    this.isSuccess = false;
    this.maskedBlob = null;
    this.fileUrl = null;

    // Generate a preview of the original file
    const reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
    reader.readAsDataURL(this.file);

    console.log('Selected file:', this.file);
  }

  removeFile() {
    this.file = null;
    this.isSuccess = false;
    this.errorMessage = '';
    this.maskedBlob = null;
    this.fileUrl = null;
  }

  async uploadAndFetchMaskedFile() {
    if (!this.file) {
      this.errorMessage = 'Please select a file first.';
      return;
    }
          
    this.isUploading = true;
    this.errorMessage = '';
    const data: uploadDocument = {
      documentType: this.selectedDocumentType,
      file: this.file,
      isSave: this.saveMaskedDocument
    };
        
    try {
      console.log(data);
      
      // Upload file and process according to the response type
      const response = await this.documentService.uploadDocument(data);
      
      if (data.isSave === false) {
        // If not saving to S3, we get the blob directly from the response
        this.maskedBlob = new Blob([response.directBlob], { 
          type: response.fileType || this.file.type 
        });
        
        // Store the original filename for later use during download
        this.originalFileName = this.file.name;
      } else {
        // If saving to S3, we need to fetch the file using the returned URL
        console.log('Upload successful', response.fileUrl);
        this.maskedBlob = await this.documentService.downloadDocument(response.fileUrl);
        this.originalFileName = this.file.name;
      }
      
      if (!(this.maskedBlob instanceof Blob)) {
        throw new Error('Invalid file received. Expected a Blob.');
      }
      
      // Generate preview from masked file
      const objectURL = URL.createObjectURL(this.maskedBlob);
      this.fileUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      this.isSuccess = true;
      
      console.log('Masked file preview updated');
    } catch (error: any) {
      this.errorMessage = error.message || 'An error occurred during upload.';
      console.error('Upload error:', error);
    } finally {
      this.isUploading = false;
    }
  }
  
  // Updated download function with date-based filename
  downloadMaskedFile() {
    if (!this.maskedBlob) {
      this.errorMessage = 'No file available for download.';
      return;
    }
    
    if (this.isDownloading) return; // Prevent multiple downloads
    
    this.isDownloading = true;
    this.errorMessage = '';
    
    try {
      const url = window.URL.createObjectURL(this.maskedBlob);
      const link = document.createElement('a');
      
      // Generate date string in format YYYYMMDD
      const now = new Date();
      const dateStr = now.getFullYear() + 
                     String(now.getMonth() + 1).padStart(2, '0') + 
                     String(now.getDate()).padStart(2, '0');
      
      // Get original file extension
      const originalName = this.originalFileName || this.file?.name || 'file';
      const fileExtension = originalName.split('.').pop() || '';
      
      // Create new filename with date
      const newFileName = `${dateStr}_masked_${originalName.split('.')[0]}.${fileExtension}`;
      
      link.href = url;
      link.download = newFileName;
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);
      
      console.log('Masked file downloaded successfully as', newFileName);
    } catch (error) {
      console.error('Download error:', error);
      this.errorMessage = 'Download failed. Please try again.';
    } finally {
      this.isDownloading = false;
    }
  }
  
  // Add this property to the component class
  originalFileName: string | null = null;
}


// 08712459594

// sbi.05326@sbi.co.in