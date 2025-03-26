import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents/documents.component';
import { TextComponent } from './text/text.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AnalyticsComponent } from './analytics/analytics.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    DocumentsComponent,
    TextComponent,
    AnalyticsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  refreshTrigger = false;
  userName: string | null = null;
  animationObserver: IntersectionObserver | null = null;
  activeTab: string = 'main';

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.refreshTrigger = !this.refreshTrigger; // Toggle to force update
    this.titleService.setTitle('Dashboard - Secure Document Management');

    // Get user name from local storage if available
    this.userName = localStorage.getItem('userName');

    // Check for query params to set the active tab
    this.route.queryParams.subscribe((params) => {
      if (
        params['tab'] &&
        ['main', 'analytics', 'text'].includes(params['tab'])
      ) {
        this.activeTab = params['tab'];
      }
    });
  }

  ngOnDestroy() {
    // Clean up the observer when component is destroyed
    if (this.animationObserver) {
      this.animationObserver.disconnect();
    }
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;

    // Update URL with the active tab
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: tabName },
      queryParamsHandling: 'merge',
    });

    // Update page title based on active tab
    if (tabName === 'analytics') {
      this.titleService.setTitle('Analytics - Secure Document Management');
    } else {
      this.titleService.setTitle('Dashboard - Secure Document Management');
    }
  }
}
