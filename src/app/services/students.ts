import { Injectable } from '@angular/core';
import Student from '../types/students.type';

@Injectable({
  providedIn: 'root'
})
export class Students {
  students: Student[] = [
    { id: 1, name: 'John Doe', rate: 7 },
    { id: 2, name: 'Jane Smith', rate: 6 },
    { id: 3, name: 'Alice Johnson', rate: 8 },
  ]

  getStudents() {
    return this.students;
  }

  getBestStudent(students: Student[] | null = null): Student {
    if (!students) {
      students = this.students;
    }
    return students.reduce((best, current) => {
      return current.rate > best.rate ? current : best;
    }, students[0]);
  }

  constructor() { }
}
