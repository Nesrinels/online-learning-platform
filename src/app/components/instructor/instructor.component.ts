import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  template: `
    <section class="instructor-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="instructor-container">
        <header class="section-header">
          <h2 class="section-title">Meet Your Instructors</h2>
          <p class="section-description">Learn from industry experts with years of real-world experience who are passionate about helping you succeed</p>
        </header>
        
        <div class="instructors-grid">
          <!-- Instructor 1 -->
          <mat-card class="instructor-card">
            <div class="instructor-image-container">
              <div class="instructor-image" [style.background-image]="'url(' + instructor1Image + ')'"></div>
              <div class="instructor-social">
                <a href="#" class="social-icon"><mat-icon>linkedin</mat-icon></a>
                <a href="#" class="social-icon"><mat-icon>language</mat-icon></a>
                <a href="#" class="social-icon"><mat-icon>email</mat-icon></a>
              </div>
            </div>
            <mat-card-content>
              <h3 class="instructor-name">Dr. Sarah Johnson</h3>
              <p class="instructor-title">Lead Web Development Instructor</p>
              
              <div class="instructor-stats">
                <div class="stat">
                  <div class="stat-value">12+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                  <div class="stat-value">1.5k+</div>
                  <div class="stat-label">Students</div>
                </div>
                <div class="stat">
                  <div class="stat-value">15</div>
                  <div class="stat-label">Courses</div>
                </div>
              </div>
              
              <p class="instructor-bio">Former Google engineer with expertise in front-end frameworks and performance optimization. Ph.D. in Computer Science from MIT.</p>
              
              <div class="expertise-tags">
                <span class="expertise-tag">Angular</span>
                <span class="expertise-tag">React</span>
                <span class="expertise-tag">Node.js</span>
                <span class="expertise-tag">Performance</span>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button class="view-courses-btn">
                View Courses <mat-icon>arrow_forward</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
          
          <!-- Instructor 2 -->
          <mat-card class="instructor-card">
            <div class="instructor-image-container">
              <div class="instructor-image" [style.background-image]="'url(' + instructor2Image + ')'"></div>
              <div class="instructor-social">
                <a href="#" class="social-icon"><mat-icon>linkedin</mat-icon></a>
                <a href="#" class="social-icon"><mat-icon>language</mat-icon></a>
                <a href="#" class="social-icon"><mat-icon>email</mat-icon></a>
              </div>
            </div>
            <mat-card-content>
              <h3 class="instructor-name">Marcus Chen</h3>
              <p class="instructor-title">Backend & Cloud Architecture</p>
              
              <div class="instructor-stats">
                <div class="stat">
                  <div class="stat-value">8+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat">
                  <div class="stat-value">980+</div>
                  <div class="stat-label">Students</div>
                </div>
                <div class="stat">
                  <div class="stat-value">7</div>
                  <div class="stat-label">Courses</div>
                </div>
              </div>
              
              <p class="instructor-bio">AWS-certified architect specializing in scalable backend systems. Previously worked at Amazon Web Services and Accenture.</p>
              
              <div class="expertise-tags">
                <span class="expertise-tag">AWS</span>
                <span class="expertise-tag">Node.js</span>
                <span class="expertise-tag">MongoDB</span>
                <span class="expertise-tag">DevOps</span>
              </div>
            </mat-card-content>
            <mat-card-actions>
              <button mat-button class="view-courses-btn">
                View Courses <mat-icon>arrow_forward</mat-icon>
              </button>
            </mat-card-actions>
          </mat-card>
        </div>
        
        <div class="instructor-features">
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>school</mat-icon>
            </div>
            <h3 class="feature-title">Expert Credentials</h3>
            <p class="feature-description">All our instructors hold advanced degrees and industry certifications in their specialized fields.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>business_center</mat-icon>
            </div>
            <h3 class="feature-title">Industry Experience</h3>
            <p class="feature-description">Learn from professionals with real-world experience at leading tech companies and organizations.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">
              <mat-icon>forum</mat-icon>
            </div>
            <h3 class="feature-title">Dedicated Support</h3>
            <p class="feature-description">Get personalized feedback and assistance throughout your learning journey.</p>
          </div>
        </div>
        
        <div class="cta-container">
          <p class="cta-text">Ready to learn from the best in the industry?</p>
          <button mat-raised-button color="primary" class="cta-button">Explore All Instructors</button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {
  instructor1Image = 'assets/images/woman.jpg';
  instructor2Image = 'assets/images/man.jpg';

  constructor(public themeService: ThemeService) {}
}