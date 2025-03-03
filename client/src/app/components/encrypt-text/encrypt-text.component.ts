import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EncryptTextService } from '../../services/encrypt-text.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-encrypt-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encrypt-text.component.html',
  styleUrls: ['./encrypt-text.component.css']
})
export class EncryptTextComponent implements OnInit {
  text = '';
  receiverId = '';
  searchTerm = '';
  users: User[] = [];
  filteredUsers: User[] = [];
  selectedUser: User | null = null;
  encryptedMessage = '';
  decryptedMessage = '';
  loading = false;
  error = '';

  constructor(private encryptTextService: EncryptTextService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.loading = true;
    this.encryptTextService.getUsers().subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.filterUsers();
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Failed to fetch users: ' + (err.error?.message || err.message);
        this.loading = false;
      }
    });
  }

  filterUsers() {
    this.filteredUsers = this.searchTerm.trim()
      ? this.users.filter(user =>
          user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      : this.users;
  }

  selectUser(user: User) {
    this.receiverId = user._id;
    this.selectedUser = user;
  }

  handleEncrypt() {
    if (!this.text) {
      this.error = 'Please enter text to encrypt';
      return;
    }

    if (!this.receiverId) {
      this.error = 'Please select a recipient';
      return;
    }

    this.loading = true;
    this.error = '';
    const id = localStorage.getItem('userId') || 'currentUserId';

    this.encryptTextService.encryptText(id, this.receiverId, this.text).subscribe({
      next: (response: { encryptedText: string }) => {
        this.encryptedMessage = response.encryptedText;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Encryption failed: ' + (err.error?.message || err.message);
        this.loading = false;
      }
    });
  }

  decrypt(encryptedText: string) {
    this.loading = true;

    this.encryptTextService.decryptText(encryptedText).subscribe({
      next: (response: { decryptedText: string }) => {
        this.decryptedMessage = response.decryptedText;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = 'Decryption failed: ' + (err.error?.message || err.message);
        this.loading = false;
      }
    });
  }
}
