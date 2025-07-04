import { Component, signal } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'box',
  imports: [NgClass, NgStyle],
  templateUrl: './box.html',
  styles: `
    .box {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      border: 2px solid blue;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: darkblue;
    }
    button, btn {
      margin-bottom: 10px;
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
      border-radius: 4px;
    }
    .btn-primary {
      background-color: #007bff;
      color: white;
      border: none;
    }
    .btn-secondary {
      background-color: #6c757d;
      color: white;
      border: none;
    }
  `
})
export class Box {
  box = signal(false);

  toggleBox() {
    this.box.update(current => !current);
  }

  bgColor = signal('lightgreen');

  toggleStyle() {
    this.bgColor.update(current => current === 'lightgreen' ? 'lightcoral' : 'lightgreen');
  }

  width = signal(100);

  changeWidth(e: Event) {
    const input = e.target as HTMLInputElement;
    const newWidth = +input.value;
    if (!isNaN(newWidth) && newWidth > 0) {
      this.width.set(newWidth);
    }
  }

  fontSize = signal(16);
}
