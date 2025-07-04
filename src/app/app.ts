import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Card],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}