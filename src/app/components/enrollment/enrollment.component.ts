import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [],
  template: `
    <section class="enrollment-section">
      <h2 class="section-title">Enrollment Information</h2>
      <p class="section-description">Explore the details on how to enroll in the course, including pricing and registration process.</p>
      
      <div class="enrollment-cards">
        <div class="enrollment-card">
          <h3 class="card-title">Course Pricing</h3>
          <p class="card-description">Discover the various pricing options available for the course.</p>
          <div class="price">$99</div>
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
export class EnrollmentComponent {}