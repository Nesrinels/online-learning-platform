import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  template: `
    <section class="testimonials-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="testimonials-container">
        <header class="section-header">
          <div class="badge-container">
            <span class="section-badge">Student Success</span>
          </div>
          <h2 class="section-title">What Our Students Say</h2>
          <p class="section-description">Discover how our courses have helped students transform their careers and achieve their goals</p>
        </header>
        
        <div class="testimonials-carousel-container">
          <div class="testimonials-controls">
            <button mat-mini-fab class="control-button prev-button" (click)="scrollTestimonials('left')">
              <mat-icon>arrow_back</mat-icon>
            </button>
            <button mat-mini-fab class="control-button next-button" (click)="scrollTestimonials('right')">
              <mat-icon>arrow_forward</mat-icon>
            </button>
          </div>
          
          <div class="testimonials-wrapper" #testimonialsWrapper>
            <!-- Testimonial 1 -->
            <mat-card class="testimonial-card">
              <div class="testimonial-header">
                <div class="testimonial-rating">
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                </div>
                <div class="testimonial-course">Fullstack Web Development</div>
              </div>
              
              <mat-card-content>
                <p class="testimonial-text">"This course completely transformed my career trajectory! The hands-on projects helped me build a portfolio that got me noticed. I landed a junior developer role at a tech startup within weeks of completing the course. The instructor's support was incredible throughout."</p>
              </mat-card-content>
              
              <div class="testimonial-footer">
                <div class="user-avatar user1"></div>
                <div class="user-info">
                  <p class="user-name">Emily Johnson</p>
                  <p class="user-job">Frontend Developer at TechStart</p>
                </div>
              </div>
              
              <div class="testimonial-badge">
                <mat-icon>verified</mat-icon>
                <span>Verified Graduate</span>
              </div>
            </mat-card>
            
            <!-- Testimonial 2 -->
            <mat-card class="testimonial-card featured">
              <div class="testimonial-header">
                <div class="testimonial-rating">
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                </div>
                <div class="testimonial-course">Advanced Angular</div>
              </div>
              
              <mat-card-content>
                <p class="testimonial-text">"The hands-on projects were absolute game-changers for me. Instead of just learning theory, I built real-world applications that solved actual problems. This practical approach made concepts stick and gave me confidence. The code reviews from instructors helped me improve dramatically. Worth every penny and minute invested!"</p>
              </mat-card-content>
              
              <div class="testimonial-footer">
                <div class="user-avatar user2"></div>
                <div class="user-info">
                  <p class="user-name">Michael Smith</p>
                  <p class="user-job">Senior Developer at CloudTech</p>
                </div>
              </div>
              
              <div class="testimonial-badge">
                <mat-icon>verified</mat-icon>
                <span>Verified Graduate</span>
              </div>
            </mat-card>
            
            <!-- Testimonial 3 -->
            <mat-card class="testimonial-card">
              <div class="testimonial-header">
                <div class="testimonial-rating">
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star_half</mat-icon>
                </div>
                <div class="testimonial-course">Web Development Basics</div>
              </div>
              
              <mat-card-content>
                <p class="testimonial-text">"I highly recommend this course to anyone looking to break into web development. As someone who tried learning from random YouTube tutorials, having a structured curriculum made all the difference. The community support was fantastic, and I never felt stuck for long. This course gave me the foundation I needed to start freelancing."</p>
              </mat-card-content>
              
              <div class="testimonial-footer">
                <div class="user-avatar user3"></div>
                <div class="user-info">
                  <p class="user-name">Sophie Williams</p>
                  <p class="user-job">Freelance Web Developer</p>
                </div>
              </div>
              
              <div class="testimonial-badge">
                <mat-icon>verified</mat-icon>
                <span>Verified Graduate</span>
              </div>
            </mat-card>
            
            <!-- Testimonial 4 -->
            <mat-card class="testimonial-card">
              <div class="testimonial-header">
                <div class="testimonial-rating">
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                  <mat-icon class="star-icon">star</mat-icon>
                </div>
                <div class="testimonial-course">Backend & Cloud Architecture</div>
              </div>
              
              <mat-card-content>
                <p class="testimonial-text">"Coming from a different field entirely, I was worried about my ability to transition to tech. This course not only taught me the technical skills but gave me the confidence to pursue a new career path. The instructors were responsive and genuinely invested in my success."</p>
              </mat-card-content>
              
              <div class="testimonial-footer">
                <div class="user-avatar user4"></div>
                <div class="user-info">
                  <p class="user-name">David Chen</p>
                  <p class="user-job">Backend Developer at FinTech Inc.</p>
                </div>
              </div>
              
              <div class="testimonial-badge">
                <mat-icon>verified</mat-icon>
                <span>Verified Graduate</span>
              </div>
            </mat-card>
          </div>
        </div>
        
        <div class="stats-container">
          <div class="stat-card">
            <div class="stat-value">12k+</div>
            <div class="stat-label">Graduates</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">94%</div>
            <div class="stat-label">Job Placement</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">4.8/5</div>
            <div class="stat-label">Student Rating</div>
          </div>
        </div>
        
        <div class="cta-container">
          <p>Join thousands of successful graduates</p>
          <button mat-raised-button color="primary" class="cta-button">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements AfterViewInit {
  @ViewChild('testimonialsWrapper') testimonialsWrapper!: ElementRef;
  
  constructor(public themeService: ThemeService) {}
  
  ngAfterViewInit() {
    // Initialize carousel if needed
  }
  
  scrollTestimonials(direction: 'left' | 'right') {
    const container = this.testimonialsWrapper.nativeElement;
    const scrollAmount = container.clientWidth * 0.8;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}