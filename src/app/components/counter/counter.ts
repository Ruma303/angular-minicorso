import { Component, model, output } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  template: `
    <h3>Counter Component</h3>
    <p>{{ number() }}</p>
    <button (click)="number.set(number() + 1); increment();">Increment</button>
    <button (click)="number.set(number() - 1); decrement();">Decrement</button>
  `,
  styles: ``
})
export class Counter {
  number = model<number>(0);

  increment() {
    this.number.set(this.number() + 1);
  }

  decrement() {
    this.number.set(this.number() - 1)
  }
}
