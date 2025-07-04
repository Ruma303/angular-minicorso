import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Box } from './components/box/box';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Box],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'Angular Minicorso';
  protected author = 'Riccardo Degni';

  x = 10;

  students = signal([
    { id: 1, name: 'Mario Rossi', age: 20, city: 'Roma' },
    { id: 2, name: 'Luca Bianchi', age: 22, city: 'Milano' },
    { id: 3, name: 'Anna Verdi', age: 19, city: 'Napoli' },
    { id: 4, name: 'Giulia Neri', age: 21, city: 'Torino' },
    { id: 5, name: 'Marco Gallo', age: 23, city: 'Firenze' }
  ]);

  //* Signals
  counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
  }

  decrement() {
    this.counter.update(c => c - 1);
  }

  reset() {
    this.counter.set(0);
  }

  addStudent() {
    const id = this.students().length + 1;
    this.students.update(currentStudents => [
      ...currentStudents,
      { id, name: `New Student ${id}`, age: 18 + (id % 5), city: 'Unknown' }
    ]);
  }

  updateStudent(id: number) {
    if (this.students().length > 0) {
      this.students.update(v => v.map(student =>
        student.id === id ? { ...student, name: 'Updated Student' } : student
      ));
    }
  }

  // Data binding
  textValue = 'Hello, Angular!';

  textValue2 = signal('Hello, Angular!');

  updateText2(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.textValue2.set(e.target.value);
    }
  }

}