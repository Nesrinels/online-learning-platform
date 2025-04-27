import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <h2 class="section-title">Student Testimonials</h2>
      <p class="section-description">Read what our previous students have to say about their experience with our online course.</p>
      
      <div class="testimonials-container">
        <div class="testimonial">
          <div class="user-avatar"></div>
          <p class="testimonial-text">"This course transformed my career! Landed a job within weeks."</p>
          <p class="user-name">Emily Johnson</p>
        </div>
        
        <div class="testimonial">
          <div class="user-avatar"></div>
          <p class="testimonial-text">"The hands-on projects were game-changers. Worth every penny!"</p>
          <p class="user-name">Michael Smith</p>
        </div>
        
        <div class="testimonial">
          <div class="user-avatar"></div>
          <p class="testimonial-text">"I highly recommend this course to anyone looking to improve their skills. It was worth the investment."</p>
          <p class="user-name">Sophie Williams</p>
        </div>
      </div>
    </section>
  `,
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  constructor(public themeService: ThemeService) {}
}