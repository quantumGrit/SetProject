import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ChatAreaComponent],
  template: `
    <div class="app-container">
      <app-sidebar class="sidebar"></app-sidebar>
      <app-chat-area class="chat-area"></app-chat-area>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      height: 100vh;
      background-color: #40E0D0;
    }

    .sidebar {
      width: var(--sidebar-width, 250px);
      flex-shrink: 0;
    }

    .chat-area {
      flex-grow: 1;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      .app-container {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        height: auto;
      }

      .chat-area {
        flex-grow: 1;
      }
    }
  `]
})
export class AppComponent {}
