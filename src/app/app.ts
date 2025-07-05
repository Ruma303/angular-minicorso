import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';
import { Counter } from './components/counter/counter';
import { NotifyButton } from "./components/notify-button/notify-button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Card, Counter, NotifyButton],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  number = signal(0);

  messageReceived = signal<string>('');

  onMessageReceived(message: string) {
    this.messageReceived.set(message);
  }
}