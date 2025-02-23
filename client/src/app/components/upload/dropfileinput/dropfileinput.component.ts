import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

interface FileEvent {
  files: File[];
}

@Component({
  selector: 'app-dropfileinput',
  imports: [CommonModule],
  templateUrl: './dropfileinput.component.html',
  styleUrl: './dropfileinput.component.css'
})
export class DropfileinputComponent {
  @Output() fileChange = new EventEmitter<FileEvent>();
  @ViewChild('fileDropRef') fileDropRef!: ElementRef;

  file: File | null = null;
  previewUrl: SafeUrl | null = null;
  showModal = false;

  constructor(private sanitizer: DomSanitizer) {}

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropRef.nativeElement.classList.add('dragover');
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropRef.nativeElement.classList.remove('dragover');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.fileDropRef.nativeElement.classList.remove('dragover');
    
    const files = event.dataTransfer?.files;
    if (files?.length) {
      this.handleFile(files[0]);
    }
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.handleFile(file);
    }
  }

  handleFile(file: File) {
    this.file = file;
    this.fileChange.emit({ files: [file] });
    
    // Create a masked preview URL
    const reader = new FileReader();
    reader.onload = () => {
      // Applied a simple blur effect as an example of masking
      this.previewUrl = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  removeFile() {
    this.file = null;
    this.previewUrl = null;
    this.fileChange.emit({files:[]});
  }
}
