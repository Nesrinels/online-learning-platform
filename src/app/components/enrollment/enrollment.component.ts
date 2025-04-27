import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatChipsModule],
  template: `
    <section class="enrollment-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="enrollment-container">
        <header class="section-header">
          <h2 class="section-title">Start Learning Today</h2>
          <p class="section-description">Choose the perfect course for your career goals</p>
        </header>
        
        <div class="enrollment-cards">
          <!-- Beginner Course Card -->
          <div class="enrollment-card">
            <div class="card-badge">Most Popular</div>
            <div class="card-content">
              <div class="card-icon">
                <mat-icon class="feature-icon">code</mat-icon>
              </div>
              <h3 class="card-title">Fullstack Web Development</h3>
              <div class="level-chip beginner">Beginner</div>
              <ul class="features-list">
                <li><mat-icon>check_circle</mat-icon> HTML, CSS & JavaScript</li>
                <li><mat-icon>check_circle</mat-icon> Angular Framework</li>
                <li><mat-icon>check_circle</mat-icon> Backend Development</li>
              </ul>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">14 000 DA</span>
                </div>
                <button mat-raised-button color="primary" class="enroll-button">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
          
          <!-- Free Course Card -->
          <div class="enrollment-card">
            <div class="card-content">
              <div class="card-icon">
                <mat-icon class="feature-icon">school</mat-icon>
              </div>
              <h3 class="card-title">Web Development Basics</h3>
              <div class="level-chip free">Free Course</div>
              <ul class="features-list">
                <li><mat-icon>check_circle</mat-icon> HTML & CSS Fundamentals</li>
                <li><mat-icon>check_circle</mat-icon> Intro to JavaScript</li>
                <li><mat-icon>check_circle</mat-icon> Responsive Design</li>
              </ul>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price free">Free</span>
                  <span class="price-period">Forever</span>
                </div>
                <button mat-raised-button color="accent" class="enroll-button">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
          
          <!-- Advanced Course Card -->
          <div class="enrollment-card">
            <div class="card-badge advanced">Advanced</div>
            <div class="card-content">
              <div class="card-icon">
                <mat-icon class="feature-icon">architecture</mat-icon>
              </div>
              <h3 class="card-title">Advanced Angular</h3>
              <div class="level-chip advanced">Expert Level</div>
              <ul class="features-list">
                <li><mat-icon>check_circle</mat-icon> State Management</li>
                <li><mat-icon>check_circle</mat-icon> Performance Optimization</li>
                <li><mat-icon>check_circle</mat-icon> Complex App Architecture</li>
              </ul>
              <div class="card-footer">
                <div class="price-container">
                  <span class="price">80 000 DA</span>
                </div>
                <button mat-raised-button color="primary" class="enroll-button">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="enrollment-footer">
          <p class="guarantee">30-day money-back guarantee on all paid courses</p>
          <button mat-button class="view-all-button">
            View All Courses <mat-icon>arrow_forward</mat-icon>
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent {
  constructor(public themeService: ThemeService) {}
}