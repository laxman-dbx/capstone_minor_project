import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';


type DocumentType = 'adhaar' | 'pan' | 'driving_license' | 'other' | 'bank';

@Component({
  selector: 'app-verify-user-pii',
  imports: [FormsModule,CommonModule],
  templateUrl: './verify-user-pii.component.html',
  styleUrl: './verify-user-pii.component.css'
})
export class VerifyUserPiiComponent {

  email = '';
  DocType :DocumentType= 'adhaar';
  DocNumber = '';
  verified = false;
  error = '';
  constructor(private adminService:AdminService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  verifyUserPii() {
    this.adminService.verifyUserPii(this.email, this.DocType, this.DocNumber).then(
      (response) => {
        console.log(response);
        this.verified = true;
      },
    )
    .catch((error) => {
      this.error = error;
    })
  }
}
