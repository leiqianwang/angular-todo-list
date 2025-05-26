import { Component } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  // @Input() todo!: string; // Input property to receive todo item from parent component
  constructor(public todoService: ServiceComponent) { } // Injecting the service to use its methods and properties
}
