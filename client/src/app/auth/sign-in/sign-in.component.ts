import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  enteredEmail = '';
  enteredPassword = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onSubmit() {
    try {
      const credentials = {
        email: this.enteredEmail,
        password: this.enteredPassword,
      };

      const response = await this.authService.signIn(credentials);
      console.log('Login successful', response);
      this.router.navigate(['/dashboard']);
    } catch (error:any) {
      this.errorMessage = error.message || 'Invalid credentials!';
      console.error('Login error:', error);
    }
  }
}
