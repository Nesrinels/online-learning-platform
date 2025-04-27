import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  template: `
    <mat-toolbar class="auth-toolbar" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <!-- Theme toggle on left -->
      <button mat-icon-button 
              class="theme-toggle"
              (click)="themeService.toggleTheme()"
              aria-label="Toggle theme">
        <mat-icon>
          {{ (themeService.isDarkTheme$ | async) ? 'light_mode' : 'dark_mode' }}
        </mat-icon>
      </button>

      <span class="toolbar-spacer"></span>

      <!-- Auth buttons on right -->
      <div class="auth-buttons">
        <button *ngIf="!auth.isLoggedIn()" 
                mat-stroked-button 
                color="primary"
                (click)="router.navigate(['/login'])">
          Login
        </button>
        <button *ngIf="!auth.isLoggedIn()" 
                mat-flat-button 
                color="primary"
                (click)="router.navigate(['/signup'])">
          Sign Up
        </button>
        <button *ngIf="auth.isLoggedIn()" 
                mat-flat-button 
                color="accent"
                (click)="router.navigate(['/dashboard'])">
          My Dashboard
        </button>
      </div>
    </mat-toolbar>

    <div class="welcome-container" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="welcome-content">
        <h1 class="welcome-text">
          Welcome to Your<br>
          <span class="journey-text">Learning Journey</span>
        </h1>
        <p class="welcome-description">
          Embark on a transformative learning experience with our engaging online courses.
        </p>
        <button mat-raised-button 
                color="primary" 
                class="start-button"
                (click)="auth.isLoggedIn() ? router.navigate(['/dashboard']) : router.navigate(['/signup'])">
          Enroll Now – 50% Off
        </button>
      </div>
      <div class="illustration-section">
        <img 
          src="/assets/images/learning-illustration.webp" 
          alt="Learning illustration"
          class="illustration-image"
        >
      </div>
    </div>
  `,
  styleUrl: './welcome-header.component.scss'
})
export class WelcomeHeaderComponent {
  constructor(
    public themeService: ThemeService,
    public auth: AuthService,
    public router: Router
  ) {}
}