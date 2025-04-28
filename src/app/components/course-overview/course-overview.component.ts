import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="overview-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <h2 class="section-title">Course Overview</h2>
      <p class="section-description">Unlock your potential with our Fullstack javascript, designed to help you master javascript through hands-on learning. Whether you're a beginner or looking to advance, this course offers practical knowledge, expert guidance, and flexibility to fit your schedule.</p>
      
      <div class="features-container">
        <div class="feature-card">
          <h3 class="feature-title">Interactive Lessons</h3>
          <p class="feature-description">Dive into real-world scenarios with interactive exercises, quizzes, and projects that reinforce learning</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Expert Instructors</h3>
          <p class="feature-description">Get mentored by industry leaders with [X] years of experience—learn insider tips and best practices.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Flexible Schedule</h3>
          <p class="feature-description">No deadlines, no pressure. Learn at your own pace, anytime, anywhere.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './course-overview.component.scss'
})
export class CourseOverviewComponent {
  constructor(public themeService: ThemeService) {}
}