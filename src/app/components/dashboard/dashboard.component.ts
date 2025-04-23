import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <section class="dashboard-section">
      <h2 class="section-title">Dashboard Overview</h2>
      <p class="section-description">Explore the interactive dashboard designed to enhance your learning experience.</p>
      
      <div class="dashboard-features">
        <div class="feature-card">
          <h3 class="feature-title">Interactive Modules</h3>
          <p class="feature-description">Engage with dynamic course content through interactive modules.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Progress Tracking</h3>
          <p class="feature-description">Track your progress and stay motivated with visual progress indicators.</p>
        </div>
        
        <div class="feature-card">
          <h3 class="feature-title">Discussion Forums</h3>
          <p class="feature-description">Connect with peers and instructors through interactive discussion forums.</p>
        </div>
      </div>
      
      <div class="dashboard-overview">
        <h3 class="overview-title">Online Course Landing Page + Dashboard</h3>
        <p class="overview-description">This landing page and dashboard combination is designed to provide a seamless online learning experience. The Progress Tracking feature enables students to monitor their progress and completion status within the course.</p>
      </div>
      
      <div class="resource-library">
        <h3 class="library-title">Resource Library</h3>
        <p class="library-description">Provides access to additional resources, materials, and tools to enhance the learning experience.</p>
      </div>
    </section>
  `,
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}