import { Component, OnInit } from '@angular/core';
import { EncryptTextService } from '../../../services/encrypt-text.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  sharedWithMe: any[] = [];
  sharedByMe: any[] = [];

  constructor(private encryptService: EncryptTextService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // Fetch shared data with error handling
    this.encryptService.getSharedWithMe().subscribe(
      response => {
        if (response?.success) {
          this.sharedWithMe = response.sharedFiles || [];
        }
      },
      error => console.error('Error fetching shared files (With Me):', error)
    );

    this.encryptService.getSharedByMe().subscribe(
      response => {
        if (response?.success) {
          this.sharedByMe = response.data || [];
        }
      },
      error => console.error('Error fetching shared files (By Me):', error)
    );
  }
}
