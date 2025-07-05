import { Component, output } from '@angular/core';

@Component({
  selector: 'send-message',
  imports: [],
  template:`
    <h3>Send Message Component</h3>
    <input (click)="sendMessage()"/>`,
  styles: ``
})
export class SendMessage {
  message = output<string>();

  sendMessage() {
    this.message.emit(`Message sent: `);
  }
}
