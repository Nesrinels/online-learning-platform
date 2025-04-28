import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { WelcomeHeaderComponent } from '../components/welcome-header/welcome-header.component';
import { CourseOverviewComponent } from '../components/course-overview/course-overview.component';
import { InstructorComponent } from '../components/instructor/instructor.component';
import { EnrollmentComponent } from '../components/enrollment/enrollment.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { FaqComponent } from '../components/faq/faq.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { CourseOutlineComponent } from '../components/course-outline/course-outline.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    WelcomeHeaderComponent,
    CourseOverviewComponent,
    InstructorComponent,
    EnrollmentComponent,
    TestimonialsComponent,
    FaqComponent
  ],
  template: `
    <div class="layout-container" [class.dark-theme]="(themeService.isDarkTheme$ | async)">
      <app-welcome-header></app-welcome-header>
      <app-course-overview></app-course-overview>
      <app-instructor></app-instructor>
      <app-enrollment></app-enrollment>
      <app-testimonials></app-testimonials>
      <app-faq></app-faq>
      <!-- <app-course-outline></app-course-outline> -->
      <!-- <app-dashboard></app-dashboard> -->
      
      <footer class="main-footer">
        <p>&copy; 2025 Online Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  `,
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(public themeService: ThemeService) {}
}