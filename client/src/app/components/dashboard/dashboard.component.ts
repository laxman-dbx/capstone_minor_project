import { Component } from '@angular/core';
import { DocumentsComponent } from './documents/documents.component';
import { TextComponent } from './text/text.component';

@Component({
  selector: 'app-dashboard',
  imports: [DocumentsComponent,TextComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  refreshTrigger = false;

  ngOnInit() {
    this.refreshTrigger = !this.refreshTrigger; // Toggle to force update
  }
}
