import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Fetch user data (modify based on actual service)
    this.user = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePic: 'assets/profile.png', // Change this to dynamic user image
    };
  }
}
