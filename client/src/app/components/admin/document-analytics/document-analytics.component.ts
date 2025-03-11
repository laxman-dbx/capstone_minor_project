import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { AdminService } from '../../../services/admin.service';

export interface DocumentTypeCount {
  _id: string;
  count: number;
}

export interface DocumentAnalytics {
  total: number;
  byType: DocumentTypeCount[];
}

export interface DocumentAnalyticsResponse {
  documents: DocumentAnalytics;
}


@Component({
  selector: 'app-document-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-analytics.component.html',
  styleUrls: ['./document-analytics.component.css']
})
export class DocumentAnalyticsComponent implements OnInit {
  @ViewChild('chartCanvas', { static: false }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | null = null;
  loading = true;
  error = '';
  analytics: DocumentTypeCount[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.loadAnalytics();
  }

  async loadAnalytics() {
    try {
      const res = await this.adminService.getDocumentAnalytics();
      console.log(res);
  
      if (!res) {
        throw new Error('Invalid analytics response');
      }
  
      this.analytics = res.documents.byType; // ✅ Extract `byType` array correctly
      this.loading = false;
      console.log(this.analytics)
      setTimeout(() => this.createChart(), 0); // ✅ Ensure ViewChild is available
    } catch (err) {
      console.error('Analytics Error:', err);
      this.error = 'Failed to load analytics';
      this.loading = false;
    }
  }
  

  createChart() {
    if (!this.chartCanvas?.nativeElement) {
      console.error('Chart canvas not found');
      return;
    }

    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('Could not get 2D context');
      return;
    }

    if (this.chart) {
      this.chart.destroy(); // ✅ Destroy previous chart
    }

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.analytics.map(item => item._id), // ✅ Use `_id` for labels (e.g., 'adhaar', 'pan')
        datasets: [{
          label: 'Document Requests',
          data: this.analytics.map(item => item.count), // ✅ Use `count` for values
          backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 99, 132, 0.5)'],
          borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }
}
