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
      <p class="section-description">Brief summary of the online course, highlighting key features and benefits</p>
      
      <div class="features-container">
        <div class="feature-card">
          <h3 class="feature-title">Interactive Lessons</h3>
          <p class="feature-description">Engage with dynamic content and interactive exercises.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Expert Instructors</h3>
          <p class="feature-description">Learn from industry professionals with real-world experience.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Flexible Schedule</h3>
          <p class="feature-description">Study at your own pace and convenience.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './course-overview.component.scss'
})
export class CourseOverviewComponent {
  constructor(public themeService: ThemeService) {}
}