import { Component } from '@angular/core';
import { EncryptTextService } from '../../services/encrypt-text.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decrypt-text',
  templateUrl: './decrypt-text.component.html',
  styleUrls: ['./decrypt-text.component.css'],
  imports:[FormsModule,CommonModule]
})
export class DecryptTextComponent {
  sharedWithMe: any[] = [];
  selectedMessage: string = '';
  decryptedMessage: string = '';
  error = '';
  loading = false;

  constructor(private encryptService: EncryptTextService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.encryptService.getSharedWithMe().subscribe({
      next: response => {
        if (response?.success) {
          this.sharedWithMe = response.sharedFiles || [];
          console.log(this.sharedWithMe);
        }
      },
      error: err => console.error('Error fetching shared files:', err)
    });
  }

  selectMessage(encryptedTextId: string) {
    this.selectedMessage = encryptedTextId;
    this.decryptedMessage = ''; // Reset previous decryption result
    this.error = '';
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
}
