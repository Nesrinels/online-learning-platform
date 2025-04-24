import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="instructor-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <h2 class="section-title">Instructor Introduction</h2>
      <p class="section-description">Meet our experienced course instructor who will guide you through the course with their expertise and credentials.</p>
      
      <div class="instructor-details">
        <div class="detail-card">
          <div class="number-badge">1</div>
          <h3 class="detail-title">Expertise</h3>
          <p class="detail-description">Our instructor has years of experience in the field and is a subject matter expert in the course topic.</p>
        </div>
        
        <div class="detail-card">
          <div class="number-badge">2</div>
          <h3 class="detail-title">Credentials</h3>
          <p class="detail-description">The instructor holds relevant certifications and qualifications to ensure you receive top-notch education.</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {
  constructor(public themeService: ThemeService) {}
}