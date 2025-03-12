import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DocumentAnalyticsComponent } from '../document-analytics/document-analytics.component';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { SupportTicketComponent } from "../support-ticket/support-ticket.component";
import { VerifyUserPiiComponent } from "../verify-user-pii/verify-user-pii.component";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DocumentAnalyticsComponent,
    SupportTicketComponent,
    VerifyUserPiiComponent
],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit, OnDestroy {
  private ticketSubscription?: Subscription;

  constructor(
    private adminService:AdminService,
    private router:Router
  ) {}

  ngOnInit() {
    // // Subscribe to real-time ticket updates
    // this.ticketSubscription = this.socketService
    //   .listenToTicketUpdates()
    //   .subscribe(update => {
    //     console.log('Received ticket update:', update);
    //     // Handle ticket updates here
    //   });
  }

  ngOnDestroy() {
    // if (this.ticketSubscription) {
    //   this.ticketSubscription.unsubscribe();
    // }
  }

  signOut() {
    this.adminService.logout(); // Ensure this method exists in AuthService
    this.router.navigate(['/admin/login']);
  }
}