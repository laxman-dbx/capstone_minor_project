import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DropfileinputComponent } from './dropfileinput/dropfileinput.component';
import { DocumentService } from '../../services/document.service';

interface FileEvent {
  files: File[];
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  standalone: true,
  imports: [CommonModule, DropfileinputComponent]
})
export class UploadComponent {
  file: File | null = null;
  isUploading = false;
  isSuccess = false;
  isDownloading = false;
  errorMessage = '';
  fileUrl: SafeUrl | null = null;
  maskedBlob: Blob | null = null; // Store masked file to prevent duplicate API calls

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

    try {
      // Step 1: Upload file
      const res=await this.documentService.uploadDocument(this.file);
      console.log('Upload successful',res.fileUrl);

      // Step 2: Fetch masked file
      this.maskedBlob = await this.documentService.downloadDocument(res.fileUrl);

      if (!(this.maskedBlob instanceof Blob)) {
        throw new Error('Invalid file received. Expected a Blob.');
      }

      // Step 3: Generate preview from masked file
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

      link.href = url;
      link.download = this.file?.name || 'masked-file';
      document.body.appendChild(link);
      link.click();

      // Cleanup
      setTimeout(() => {
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      }, 100);

      console.log('Masked file downloaded successfully');
    } catch (error) {
      console.error('Download error:', error);
      this.errorMessage = 'Download failed. Please try again.';
    } finally {
      this.isDownloading = false;
    }
  }
}
