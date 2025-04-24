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
          <p class="testimonial-text">"I was amazed by the depth of knowledge I gained through this course. I feel more confident in my skills now."</p>
          <p class="user-name">Emily Johnson</p>
        </div>
        
        <div class="testimonial">
          <div class="user-avatar"></div>
          <p class="testimonial-text">"The course content was engaging and well-structured. I felt like I got more than what I paid for."</p>
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