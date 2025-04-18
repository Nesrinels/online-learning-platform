import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  standalone: true,
  imports: [],
  template: `
    <div class="welcome-container">
  <div class="welcome-content">
    <h1 class="welcome-text">
      Welcome to Your<br>
      <span class="journey-text">Learning Journey</span>
    </h1>
  </div>
</div>

  `,
  styleUrl: './welcome-header.component.scss'
})
export class WelcomeHeaderComponent {}