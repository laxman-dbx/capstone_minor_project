import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../services/admin.service';
import { SupportTicketComponent } from "../support-ticket/support-ticket.component";
import { DashboardAnalyticsComponent } from "../dashboard-analytics/dashboard-analytics.component";
import { ActivityLogsComponent } from "../activity-logs/activity-logs.component";


@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SupportTicketComponent,
    DashboardAnalyticsComponent,
    ActivityLogsComponent
],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {


  constructor(
    private adminService: AdminService
  ) {}

  signOut() {
    this.adminService.logout();
    window.location.href = '/admin/login';
  }
}