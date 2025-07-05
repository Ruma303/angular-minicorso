import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CapitalizePipe } from './utils/capitalize-pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CapitalizePipe],
  template: `
  <section>
    <div>
      {{ text | capitalize }}
    </div>
  </section>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class App {
  text = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
}