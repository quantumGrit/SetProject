import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-area">
      <div class="chat-messages">
        <div class="message user-message">
          Merhaba! Bugün nasıl yardımcı olabilirim?
        </div>
      </div>
      <div class="chat-input-container">
        <input 
          type="text" 
          class="chat-input" 
          [(ngModel)]="message" 
          placeholder="Mesajınızı yazın..."
        >
        <button class="send-btn">
          <i class="icon">➤</i>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chat-area {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.1);
    }

    .chat-messages {
      flex-grow: 1;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .message {
      max-width: 70%;
      margin: 10px 0;
      padding: 10px 15px;
      border-radius: 15px;
      align-self: flex-start;
    }

    .user-message {
      background-color: rgba(255, 255, 255, 0.5);
      align-self: flex-end;
    }

    .chat-input-container {
      display: flex;
      height: var(--input-height);
      margin-top: 10px;
    }

    .chat-input {
      flex-grow: 1;
      border: none;
      border-radius: 15px;
      padding: 0 15px;
      background-color: var(--input-bg);
      margin-right: 10px;
    }

    .send-btn {
      width: var(--input-height);
      height: var(--input-height);
      border: none;
      background: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class ChatAreaComponent {
  message = '';
}
