import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
  { path: 'sign-in', loadComponent: () => import('./auth/sign-in/sign-in.component').then(m => m.SignInComponent) },
  { path: 'sign-up', loadComponent: () => import('./auth/sign-up/sign-up.component').then(m => m.SignUpComponent) },
  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'upload', loadComponent: () => import('./components/upload/upload.component').then(m => m.UploadComponent) },
  { path: 'faq', loadComponent: () => import('./components/faq/faq.component').then(m => m.FaqComponent) },
  { path: 'error/:id', loadComponent: () => import('./components/error/error.component').then(m => m.ErrorComponent) },
  { path: 'profile', loadComponent: ()=> import('./components/profile/profile.component').then(m=>m.ProfileComponent) }
];
