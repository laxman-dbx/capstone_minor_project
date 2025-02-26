import { Component } from '@angular/core';
import { DocumentsComponent } from './documents/documents.component';

@Component({
  selector: 'app-dashboard',
  imports: [DocumentsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
