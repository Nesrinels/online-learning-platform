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
  selector: 'app-login',
  imports: [
    CommonModule, 
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="auth-container" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="login-toolbar" [class.dark-theme]="themeService.isDarkTheme$ | async">
        <button mat-icon-button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
          <mat-icon>{{ (themeService.isDarkTheme$ | async) ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>
        
        <span class="toolbar-spacer"></span>
      </div>

      <div class="auth-form">
        <h2>Login</h2>
        <form (ngSubmit)="onSubmit()">
          <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required>
          <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required>
          <button type="submit" class="login-button">Login</button>
          <p class="error" *ngIf="error">{{ error }}</p>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService, 
    private router: Router,
    public themeService: ThemeService
  ) {}

  async onSubmit(): Promise<void> {
    this.error = '';
    
    if (!this.email || !this.password) {
      this.error = 'Please enter both email and password';
      return;
    }
  
    if (this.auth.login(this.email, this.password)) {
      await this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials. Please try again.';
    }
  }
}