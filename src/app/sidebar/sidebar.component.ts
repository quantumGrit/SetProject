import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar" [class.sidebar-open]="isOpen">
      <button class="toggle-btn" (click)="toggleSidebar()">
        <i class="icon">{{ isOpen ? '<<' : '>>' }}</i>
      </button>
      <button class="new-chat-btn" *ngIf="!isOpen">
        <i class="icon">+</i>
      </button>
      <div class="sidebar-content" *ngIf="isOpen">
        <h3>Sohbetler</h3>
        <!-- Add chat list here -->
      </div>
    </div>
  `,
  styles: [`
    .sidebar {
      width: var(--sidebar-open-width);
      height: 100%;
      background-color: rgba(255, 255, 255, 0.2);
      transition: width 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .sidebar.sidebar-open {
      width: var(--sidebar-open-width);
    }

    .sidebar:not(.sidebar-open) {
      width: var(--sidebar-closed-width);
    }

    .toggle-btn, .new-chat-btn {
      position: absolute;
      top: 10px;
      left: 5px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .new-chat-btn {
      top: 50px;
    }

    .sidebar-content {
      padding: 20px;
    }
  `]
})
export class SidebarComponent {
  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
