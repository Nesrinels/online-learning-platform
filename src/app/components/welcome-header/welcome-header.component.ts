import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-welcome-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
  <div class="welcome-container" [class.dark-theme]="themeService.isDarkTheme$ | async">
      <div class="welcome-content">
        <h1 class="welcome-text">
          Welcome to Your<br>
          <span class="journey-text">Learning Journey</span>
        </h1>
        <p class="welcome-description">
          Embark on a transformative learning experience with our engaging online courses.
        </p>
        <button mat-raised-button class="start-button">Start Learning Now</button>
      </div>
      <div class="illustration-section">
        <div class="illustration-placeholder">
          ILLUSTRATION ACTIVE PART
        </div>
      </div>
    </div>
  `,
  styleUrl: './welcome-header.component.scss'
})
export class WelcomeHeaderComponent {
  constructor(public themeService: ThemeService) {}
}