import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {};
  editMode: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  constructor(private userService: UserService) {}

  async ngOnInit(): Promise<void> {
    await this.getUserProfile();
  }

  async getUserProfile(): Promise<void> {
    try {
      this.user = await this.userService.getUserProfile();
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  }

  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  async uploadProfileImage(): Promise<void> {
    if (!this.selectedFile) return;

    try {
      await this.userService.updateProfileImage(this.selectedFile);
      await this.getUserProfile(); // Refresh profile data
      this.resetImageState();
    } catch (error) {
      console.error('Error updating profile image:', error);
    }
  }

  cancelImageUpload(): void {
    this.resetImageState();
  }

  resetImageState(): void {
    this.imagePreview = null;
    this.selectedFile = null;
  }

  async updateProfile(): Promise<void> {
    try {
      await this.userService.updateUserProfile({
        name: this.user.name,
        phone: this.user.phone,
      });
      this.editMode = false;
      await this.getUserProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

  async changePassword(): Promise<void> {
    const newPassword = prompt('Enter new password:');
    if (!newPassword) return;

    try {
      await this.userService.changePassword(newPassword);
      alert('Password changed successfully');
    } catch (error) {
      console.error('Error changing password:', error);
    }
  }
}