import { Component, OnInit } from '@angular/core';
import { EncryptTextService } from '../../../services/encrypt-text.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  sharedWithMe: any[] = [];
  sharedByMe: any[] = [];
  decryptedMessage: string = '';
  error = '';
  loading = false;
  constructor(private encryptService: EncryptTextService,private toastr:ToastrService) {}

  ngOnInit(): void {
    this.loadData();
  }
  // Pagination properties
  sharedWithMePage = 1;
  sharedByMePage = 1;
  itemsPerPage = 2;

  loadData(): void {
    // Fetch shared data with error handling
    this.encryptService.getSharedWithMe().subscribe(
      response => {
        if (response?.success) {
          this.sharedWithMe = (response.sharedFiles || []).sort((a: { createdAt: string }, b: { createdAt: string }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());;
        }
      },
      error => console.error('Error fetching shared files (With Me):', error)
    );

    this.encryptService.getSharedByMe().subscribe(
      response => {
        if (response?.success) {
          this.sharedByMe = (response.data || []).sort((a: { createdAt: string }, b: { createdAt: string }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());;
        }
      },
      error => console.error('Error fetching shared files (By Me):', error)
    );
  }
  decrypt(encryptedTextId: string) {
    this.loading = true;
    this.encryptService.decryptText(encryptedTextId).subscribe({
      next: response => {
        this.decryptedMessage = response.text;
        this.loading = false;
        this.toastr.success('Message decrypted successfully');
      },
      error: err => {
        this.error = 'Decryption failed: ' + (err.error?.message || err.message);
        this.loading = false;
        this.toastr.error(this.error);
      }
    });
  }
  // Pagination methods
  getPaginatedSharedWithMe() {
    const startIndex = (this.sharedWithMePage - 1) * this.itemsPerPage;
    return this.sharedWithMe.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPaginatedSharedByMe() {
    const startIndex = (this.sharedByMePage - 1) * this.itemsPerPage;
    return this.sharedByMe.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(type: 'sharedWithMe' | 'sharedByMe') {
    if (type === 'sharedWithMe' && this.sharedWithMePage * this.itemsPerPage < this.sharedWithMe.length) {
      this.sharedWithMePage++;
    } else if (type === 'sharedByMe' && this.sharedByMePage * this.itemsPerPage < this.sharedByMe.length) {
      this.sharedByMePage++;
    }
  }

  prevPage(type: 'sharedWithMe' | 'sharedByMe') {
    if (type === 'sharedWithMe' && this.sharedWithMePage > 1) {
      this.sharedWithMePage--;
    } else if (type === 'sharedByMe' && this.sharedByMePage > 1) {
      this.sharedByMePage--;
    }
  }
}
