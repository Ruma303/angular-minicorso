import { Component, input, signal, effect } from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
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
