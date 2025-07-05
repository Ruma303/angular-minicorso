import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Client } from './http/client/client';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Client],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

}