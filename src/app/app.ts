import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Angular Minicorso';
  protected author = 'Riccardo Degni';

  x = 10;

  students = [
    { id: 1, name: 'Mario Rossi', age: 20, city: 'Roma' },
    { id: 2, name: 'Luca Bianchi', age: 22, city: 'Milano' },
    { id: 3, name: 'Anna Verdi', age: 19, city: 'Napoli' },
    { id: 4, name: 'Giulia Neri', age: 21, city: 'Torino' },
    { id: 5, name: 'Marco Gallo', age: 23, city: 'Firenze' }
  ];
}
