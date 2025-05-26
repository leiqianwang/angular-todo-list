import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],   //any components or libs to be used in the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist-angular';
}
