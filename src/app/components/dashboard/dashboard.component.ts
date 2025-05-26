import { Component } from '@angular/core';
import { TodolistComponent } from '../todolist/todolist.component';
import { CommonModule } from '@angular/common'; //CommonModule is needed for Angular directives like ngIf, ngFor, etc.

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, TodolistComponent], //Parent DashboardComponent will render child, we gotta import
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  //A component's TS file stores values and functions that affect the view and app behavior

  //Defining an Array that we'll use to render multiple child components
  todolist:string[] = [
    'Buy groceries',
    'Walk the dog',
    'Read a book',
    'Complete Angular project',
    'Exercise for 30 minutes',
    'Call a friend',
    'Prepare dinner',
    'Organize workspace',
    'Plan next week\'s tasks',
    'Watch a movie'
  ]

  //Difining a function that runs when the button is clicked
  addTodo() {
    //Adding a new todo item to the todolist array
    this.todolist.push('New Todo Item');
  }

}
