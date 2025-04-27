import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="enrollment-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <h2 class="section-title">Start Learning Today</h2>
      <p class="section-description">Choose the perfect course for your career goals</p>
      
      <div class="enrollment-cards">
        <div class="enrollment-card">
          <h3 class="card-title">Fullstack web development </h3>
          <p class="card-description">Begginer</p>
          <button mat-raised-button 
                color="primary" 
                class="start-button">
          Enroll Now
        </button>
        </div>
        
        <div class="enrollment-card">
          <h3 class="card-title">Registration Process</h3>
          <p class="card-description">Learn about the simple and easy registration process to enroll in the course.</p>
          <div class="price free">Free</div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './enrollment.component.scss'
})
export class EnrollmentComponent {
  constructor(public themeService: ThemeService) {}
}