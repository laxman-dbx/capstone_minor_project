import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { SocketService } from '../../services/socket.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Notification } from '../../models/notification.model';

interface NavigationItem {
  name: string;
  href: string;
  icon: string;
  description: string;
  isDisplay: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogin: boolean = false;
  showMobileMenu: boolean = false;
  showNotifications: boolean = false;
  notificationCount: number = 0;
  notifications: Notification[] = [];
  private subscriptions: Subscription[] = [];
  private pollingSubscription?: Subscription;

  constructor(
    private router: Router,
    private userService: UserService,
  ) {}

  navigation: NavigationItem[] = [];

  ngOnInit(): void {
    // Check if user is logged in
    this.isLogin = !!localStorage.getItem('authToken');

    // Start polling for notifications every 30 seconds
    this.startNotificationPolling();

    this.navigation = [
      {
        name: 'Home',
        href: '/',
        icon: 'fas fa-home',
        description: 'Go to home page',
        isDisplay: true,
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: 'fas fa-tachometer-alt',
        description: 'View your dashboard',
        isDisplay: this.isLogin,
      },
      {
        name: 'Upload',
        href: '/upload',
        icon: 'fas fa-upload',
        description: 'Upload and Secure',
        isDisplay: true,
      },
      {
        name: 'Mask Text',
        href: '/mask-text',
        icon: 'fas fa-book',
        description: 'Mask you Pii',
        isDisplay: true,
      },
      {
        name: 'Encrypt',
        href: '/encrypt-text',
        icon: 'fas fa-lock',
        description: 'Encrypt your data',
        isDisplay: this.isLogin,
      },
      {
        name: 'Decrypt',
        href: '/decrypt-text',
        icon: 'fas fa-unlock',
        description: 'Decrypt your data',
        isDisplay: this.isLogin,
      },
    ];
    // Check for click outside of notifications
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  private startNotificationPolling(): void {
    // Initial load
    this.loadNotifications();

    // Set up polling every 30 seconds
    this.pollingSubscription = interval(10000).subscribe(() => {
      this.loadNotifications();
    });
  }

  async loadNotifications() {
    try {
      const response: Notification[] = await this.userService.getUserNotifications();
    this.notifications = response.sort((a: Notification, b: Notification) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
      this.notificationCount = response.length;
    } catch (error) {
      console.error('Error loading notifications:', error);
    }
  }

  ngOnDestroy(): void {
    // Clean up polling subscription
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
    // Clean up subscriptions
    this.subscriptions.forEach((sub) => sub.unsubscribe());

    // Remove event listener
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
    // Close notifications if open
    if (this.showMobileMenu && this.showNotifications) {
      this.showNotifications = false;
    }
  }

  toggleNotifications(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.showNotifications = !this.showNotifications;
  }

  handleOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    const notificationBell = document.querySelector('.notification-bell');
    const notificationsDropdown = document.querySelector(
      '.notifications-dropdown',
    );

    // Close notifications if clicking outside
    if (
      this.showNotifications &&
      notificationBell &&
      notificationsDropdown &&
      !notificationBell.contains(target) &&
      !notificationsDropdown.contains(target)
    ) {
      this.showNotifications = false;
    }
  }

  addNotification(notification: Notification): void {
    this.notifications.unshift(notification);
    this.updateNotificationCount();
  }

  markAllAsRead(): void {
    this.notifications.forEach((notification) => {
      notification.isRead = true;
    });
    this.updateNotificationCount();
  }

  markAsRead(notification: Notification): void {
    notification.isRead = true;
    this.updateNotificationCount();
  }

  handleNotificationClick(notification: Notification): void {
    // Mark as read
    this.userService.markNotificationAsRead(notification._id);

    // Navigate based on notification type with state
    switch (notification.type) {
      case 'message_encrypted':
        if (notification.metadata.messageId) {
          this.router.navigate(['/decrypt-text'], {
            state: { messageId: notification.metadata.messageId },
          });
        }
        break;
      case 'support_response':
        if (notification.metadata.ticketId) {
          this.router.navigate(['/support'], {
            state: { ticketId: notification.metadata.ticketId },
          });
        }
        break;
    }

    notification.isRead = true;
    this.updateNotificationCount();
    this.showNotifications = false;
  }

  updateNotificationCount(): void {
    this.notificationCount = this.notifications.filter((n) => !n.isRead).length;
  }

  isCurrentRoute(route: string): boolean {
    if (route === '/' && this.router.url === '/') {
      return true;
    }
    return this.router.url.startsWith(route) && route !== '/';
  }

  signOut(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.isLogin = false;
    window.location.href = '/sign-in';
  }
}
