// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth/auth.guard';
import { MainLayoutComponent } from './layouts/main-layout.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent // All content lives here now
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'signup', 
    component: SignupComponent 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [authGuard] // Protected route
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  }
];