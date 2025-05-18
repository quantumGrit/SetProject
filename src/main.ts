import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SidebarComponent } from './app/sidebar/sidebar.component';
import { ChatAreaComponent } from './app/chat-area/chat-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, ChatAreaComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <app-chat-area></app-chat-area>
    </div>
  `
})
export class App {}

bootstrapApplication(App);
