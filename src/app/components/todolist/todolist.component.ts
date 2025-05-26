import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  imports: [],
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  @Input() todo!: string; // Input property to receive todo item from parent component
}
