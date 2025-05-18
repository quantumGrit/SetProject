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
        <!-- Mevcut mesajlar buraya gelecek -->
      </div>
      <div class="chat-input-container">
        <div class="input-wrapper">
          <input 
            type="text" 
            class="chat-input" 
            [(ngModel)]="message" 
            placeholder="Mesajınızı yazın..."
            aria-label="Sohbet mesajı girişi"
          >
          <button class="send-button" aria-label="Mesaj gönder">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .chat-area {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: #40E0D0;
    }

    .chat-messages {
      flex-grow: 1;
      overflow-y: auto;
      padding: 20px;
    }

    .chat-input-container {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      margin-bottom: 25px;
      background-color: transparent;
    }

    .input-wrapper {
      display: flex;
      width: 100%;
      max-width: 600px;
      height: 70px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 35px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .chat-input {
      flex-grow: 1;
      padding: 0 20px;
      border: none;
      background: transparent;
      font-size: 16px;
      color: white;
      outline: none;
      font-family: 'Arial', sans-serif;
    }

    .chat-input::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .send-button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 15px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .send-button svg {
      stroke: white;
      transition: transform 0.2s ease;
    }

    .send-button:hover svg {
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      .input-wrapper {
        max-width: 100%;
        margin: 0 10px;
        height: 50px;
      }

      .chat-input-container {
        margin-bottom: 10px;
      }
    }
  `]
})
export class ChatAreaComponent {
  message = '';
}
