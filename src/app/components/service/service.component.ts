import {Injectable } from '@angular/core';



@Injectable({  providedIn: 'root' })
export class ServiceComponent {
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
  ];

  newTodo:string = ''; //Defining a variable to hold the new todo item input value
  //This will be used to bind the input value in the template
  //Difining a function that runs when the button is clicked
  addTodo() {
    if(this.newTodo.trim()) {
      this.todolist.push(this.newTodo.trim()); //Adding the new todo item to the todolist array
      this.newTodo = ''; //Resetting the input field after adding the todo
    }

}

  removeTodo(index: number) {
    this.todolist.splice(index, 1); 
    //Removing the todo item at the specified index


  }
  
  }

