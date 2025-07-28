import { Component, signal, output, linkedSignal } from '@angular/core';
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
  m = signal<number>(0);
  n = signal<number>(0);

  messageReceived = signal<string>('');

  onMessageReceived(message: string) {
    this.messageReceived.set(message);
  }

  linkedAsComputed = linkedSignal(() => this.number() * 3); // Uso come un computed signal

  linkedSignal = linkedSignal({
    source: this.number,
    computation: (source, prev) => {
      console.log('number', this.number());
      console.log('prev', prev?.source);
      console.log('number * 2', prev?.source !== undefined ? prev.source * 2 : undefined);

      return source as number * 3;
    }
  });

  linkedWithMultipleSources = linkedSignal({
    source: () => ({
      m: this.m(),
      n: this.n()
    }),
    computation: ({ m, n }, prev) => {
      console.log('source1', m);
      console.log('source2', n);
      console.log('prev', prev?.source);
      return m + n * 2;
    }
  });
}