import { Component, input, signal, effect } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  template: `
  <h3>{{ title() }}</h3>
  <p>{{ description() }}</p>
  <p>{{ counter() }}</p>
  <img [src]="imageUrl()" alt="image" />
  <div>
    <h4>ng-content</h4>
    <ng-content></ng-content>
  </div>
  <br>
  <hr>
  <br>
  <section>
    <div>
      <ng-content></ng-content>
    </div>
    <header>
      <ng-content select="[header]"></ng-content>
    </header>
    <main>
      <ng-content select="[main]"></ng-content>
    </main>
    <footer>
      <ng-content select="[footer]"></ng-content>
    </footer>
  </section>
  `,
  styles: ``
})
export class Card {

  title = input.required<string>();
  description = input<string>('Default Description');
  start = () => Math.floor(Math.random() * 100);
  counter = signal(0);
  imageUrl = signal('https://picsum.photos/150/100');

  constructor() {
    effect(() => this.counter.set(this.start()));
    console.log('Card component initialized, counter effect set up:', this.counter());
  }

  ngOnInit() {
    this.counter.set(this.start());
    console.log('ngOnInit called, counter initialized to:', this.counter());
  }
}
