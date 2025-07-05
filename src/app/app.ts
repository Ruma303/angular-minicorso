import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Students } from './services/students';
import Student from './types/students.type';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  students = inject(Students);

  reactiveStudents = signal<Student[]>([]);

  ngOnInit() {
    this.reactiveStudents.set(this.students.students);
  }

  addStudent(name: string, rate: number) {
    const newStudent: Student = {
      id: this.reactiveStudents().length + 1,
      name,
      rate
    };
    this.reactiveStudents.update(students => [...students, newStudent]);
  }

  bestStudent = computed(() => {
    return this.students.getBestStudent(this.reactiveStudents());
  });
}