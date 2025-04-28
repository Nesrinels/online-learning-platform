import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ThemeService } from '../../services/theme.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-signup',
  imports: [
    CommonModule, 
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="auth-container" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="signup-toolbar" [class.dark-theme]="themeService.isDarkTheme$ | async">
        <button mat-icon-button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
          <mat-icon>{{ (themeService.isDarkTheme$ | async) ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>
        
        <span class="toolbar-spacer"></span>
      </div>

      <div class="auth-form">
        <h2>Create Account</h2>
        <form (ngSubmit)="onSubmit()">
          <input type="text" [(ngModel)]="name" name="name" placeholder="Full Name" required>
          <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
          <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required>
          <input type="password" [(ngModel)]="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required>
          <button type="submit" class="signup-button">Sign Up</button>
          <p class="error" *ngIf="error">{{ error }}</p>
          <p class="login-link">Already have an account? <a (click)="goToLogin()">Login</a></p>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    public themeService: ThemeService
  ) {}

  async onSubmit(): Promise<void> {
    this.error = '';
    
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }
  
    if (await this.auth.signup(this.name, this.email, this.password)) {
      await this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Registration failed. Email may already be registered.';
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}