import { Component, output } from '@angular/core';

@Component({
  selector: 'notify-button',
  standalone: true,
  template: `<button (click)="notify()">Notify</button>`
})
export class NotifyButton {
  notified = output<string>();

  notify() {
    const message = `${new Date().toLocaleTimeString()} - Notification sent!`;
    this.notified.emit(message);
  }
}