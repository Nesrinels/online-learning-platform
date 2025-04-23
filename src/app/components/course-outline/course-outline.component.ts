import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-outline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="outline-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <h2 class="section-title">Online Course Landing Page + Dashboard</h2>
      <p class="section-description">Course Curriculum: Display the course outline and modules in a structured format for easy navigation.</p>
      
      <div class="outline-grid">
        <div class="outline-card">
          <div class="placeholder-image">PHOTO</div>
          <h3 class="card-title">Course Outline</h3>
          <p class="card-description">Explore the detailed course curriculum to understand what you'll learn in each module.</p>
        </div>
        
        <div class="outline-card">
          <div class="placeholder-image">PHOTO</div>
          <h3 class="card-title">Module Structure</h3>
          <p class="card-description">Navigate through the modules and understand the sequential learning experience.</p>
        </div>
      </div>
      
    </section>
  `,
  styleUrl: './course-outline.component.scss'
})
export class CourseOutlineComponent {
  constructor(public themeService: ThemeService) {}
}