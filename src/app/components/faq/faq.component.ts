import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="faq-section">
      <h2 class="section-title">FAQ</h2>
      
      <div class="faq-container">
        <div 
          *ngFor="let item of faqItems" 
          class="faq-item"
          [ngClass]="{'open': item.isOpen}"
        >
          <div class="faq-question" (click)="toggleFaq(item)">
            <h3>{{ item.question }}</h3>
            <div class="toggle-icon">{{ item.isOpen ? '-' : '+' }}</div>
          </div>
          <div class="faq-answer" [ngClass]="{'visible': item.isOpen}">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqItems: FaqItem[] = [
    {
      question: 'What is the duration of the course?',
      answer: 'The course is self-paced, allowing you to complete it at your own convenience. On average, students complete the course within 4-6 weeks.',
      isOpen: false
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with the course, you can request a full refund within 30 days of enrollment.',
      isOpen: false
    },
    {
      question: 'Are there any prerequisites for enrolling in the course?',
      answer: 'There are no specific prerequisites for this course. It is designed for beginners with no prior experience in the subject.',
      isOpen: false
    }
  ];

  toggleFaq(item: FaqItem): void {
    item.isOpen = !item.isOpen;
  }
}