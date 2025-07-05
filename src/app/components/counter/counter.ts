import { Component, model, output } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  template: `
    <h3>Counter Component</h3>
    <p>{{ value() }}</p>
    <button (click)="value.set(value() + 1); increment();">Increment</button>
    <button (click)="value.set(value() - 1); decrement();">Decrement</button>
  `,
  styles: ``
})
export class Counter {
  value = model<number>(0);

  increment() {
    this.value.set(this.value() + 1);
  }

  decrement() {
    this.value.set(this.value() - 1)
  }
}
