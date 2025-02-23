import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Dashboard', href: '/dashboard', current: false },
    { name: 'Upload', href: '/upload', current: false },
    { name: 'FAQ', href: '/faq', current: false },
    { name: 'Privacy Policy', href: '/privacy', current: false },
  ];

  isLogin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Subscribe to AuthService changes
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLogin = status;
    });
  }

  isCurrentRoute(path: string): boolean {
    return this.router.url === path;
  }

  signOut() {
    this.authService.logout(); // Ensure this method exists in AuthService
    this.router.navigate(['/sign-in']);
  }
}
