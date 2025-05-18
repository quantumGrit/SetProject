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
      <div class="chat-input-wrapper">
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
    </div>
  `,
  styles: [`
    .chat-area {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.1);
      position: relative;
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

    .chat-input-wrapper {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .chat-input-container {
      display: flex;
      width: var(--input-width);
      height: var(--input-height);
      padding: 0 20px; /* Side padding as in the reference */
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 15px;
    }

    .chat-input {
      flex-grow: 1;
      border: none;
      background: none;
      padding: 0 15px;
      font-size: 16px;
      outline: none;
    }

    .send-btn {
      width: 50px;
      height: 100%;
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
