import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar">
      <div class="sidebar-content">
        <h3>Sohbetler</h3>
        <!-- Sohbet listesi buraya gelecek -->
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      padding: 20px;
      overflow-y: auto;
    }

    .sidebar-content h3 {
      color: white;
      margin-bottom: 15px;
    }

    @media (max-width: 768px) {
      .sidebar {
        height: auto;
        max-height: 200px;
      }
    }
  `]
})
export class SidebarComponent {}
