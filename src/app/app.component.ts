import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CourseOverviewComponent } from './components/course-overview/course-overview.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { WelcomeHeaderComponent } from './components/welcome-header/welcome-header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TestimonialsComponent,       
    CourseOverviewComponent,
    InstructorComponent,
    DashboardComponent,
    EnrollmentComponent,
    WelcomeHeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-learning-platform';
}
