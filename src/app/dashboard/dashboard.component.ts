import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="dashboard-container" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="dashboard-toolbar" [class.dark-theme]="themeService.isDarkTheme$ | async">
        <button mat-icon-button class="theme-toggle" (click)="themeService.toggleTheme()" aria-label="Toggle theme">
          <mat-icon>{{ (themeService.isDarkTheme$ | async) ? 'light_mode' : 'dark_mode' }}</mat-icon>
        </button>
        
        <span class="toolbar-spacer"></span>
        
        <button mat-stroked-button class="logout-button" (click)="logout()">
          Logout
        </button>
      </div>

      <div class="dashboard-header">
        <h1>My Learning Dashboard</h1>
      </div>

      <div class="dashboard-content">
        <div class="dashboard-card">
          <h2>Active Course</h2>
          <ul>
            <li *ngFor="let course of activeCourses">
              {{ course.title }}
              <div class="progress-text">{{ course.progress }}% complete</div>
            </li>
          </ul>
        </div>

        <div class="dashboard-card">
          <h2>Recent Activity</h2>
          <ul>
            <li>Completed "Components Basics"</li>
            <li>Started "Directives"</li>
          </ul>
        </div>

        <div class="dashboard-card">
          <h2>Available Courses</h2>
          <ul>
            <li *ngFor="let course of availableCourses">
              {{ course.title }}
              <span class="course-level" [class.intermediate]="course.category === 'Intermediate'"
                                   [class.advanced]="course.category === 'Advanced'">
                {{ course.category }}
              </span>
              <button mat-raised-button class="enroll-button">Enroll</button>
            </li>
          </ul>
        </div>

        <div class="dashboard-card">
          <h2>Your Achievements</h2>
          <div>
            <span *ngFor="let achievement of achievements" class="achievement-badge">
              {{ achievement.icon }} {{ achievement.name }}
            </span>
          </div>
        </div>
      </div>

      <footer class="main-footer">
        <p>©2025 Online Learning Platform All rights reserved.</p>
      </footer>
    </div>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(
    public themeService: ThemeService,
    public authService: AuthService,
    private router: Router
  ) {}

  // Sample data - replace with your actual data service
  activeCourses = [
    { title: 'Angular Fundamentals', progress: 65 },
    { title: 'Advanced TypeScript', progress: 30 }
  ];

  availableCourses = [
    { title: 'RxJS Masterclass', category: 'Intermediate' },
    { title: 'NgRx State Management', category: 'Advanced' }
  ];

  achievements = [
    { name: 'Fast Learner', icon: '⚡' },
    { name: 'Perfect Score', icon: '⭐' }
  ];

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}