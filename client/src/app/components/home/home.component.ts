import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private authService:AuthService){}
  isLogin:Boolean=false;
  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((status) => {
      this.isLogin = status;
    });
  }

  get navigate(){
    return this.isLogin?"/dashboard":"/signin";
  }
}
