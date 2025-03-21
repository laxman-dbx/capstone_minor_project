import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DMS';

  isErrorPage: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isErrorPage = this.router.url.startsWith('/error');
      this.isAdmin = this.router.url.startsWith('/admin');
    });
  }
}
