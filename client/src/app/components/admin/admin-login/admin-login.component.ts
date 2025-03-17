import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {  
  enteredEmail = '';
  enteredPassword = '';
  errorMessage = '';

  constructor(private adminService:AdminService,private toastr:ToastrService) {}

  async onSubmit() {
    try {
      const credentials = {
        email: this.enteredEmail,
        password: this.enteredPassword,
      };

      const response = await this.adminService.signIn(credentials);
      this.toastr.success("SignIn SuccessFul","",{positionClass:"toast-top-center"})
      window.location.href = '/admin';
    } catch (error:any) {
      this.errorMessage = error.message || 'Invalid credentials!';
      this.toastr.error(error.message,"",{positionClass:"toast-top-center"})
    }
  }
}