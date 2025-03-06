import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  currentStep = 1;
  totalSteps = 5;

  steps = [
    {
      title: 'Document Selection',
      content: 'Choose the correct document type from the dropdown menu. This helps us accurately detect and mask sensitive information.',
      image: 'assets/doc-type.png'
    },
    {
      title: 'File Requirements',
      content: 'Upload JPG, PNG, or PDF files under 10MB. Ensure documents are clear, well-lit, and properly oriented.',
      image: 'assets/file-requirements.png'
    },
    {
      title: 'Document Quality',
      content: 'Make sure your document is complete, readable, and free from glare or shadows. All corners should be visible.',
      image: 'assets/doc-quality.png'
    },
    {
      title: 'Storage Options',
      content: 'Choose whether to save your masked document securely in our encrypted storage or download it directly.',
      image: 'assets/storage-options.png'
    },
    {
      title: 'Ready to Upload',
      content: 'Click "Upload" or drag and drop your file. We\'ll process and mask the sensitive information automatically.',
      image: 'assets/doc-upload.png'
    }
  ];

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  closeDialog() {
    this.close.emit();
    this.currentStep = 1;
  }
}