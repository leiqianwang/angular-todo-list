import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TodolistComponent } from './components/todolist/todolist.component';


//This class is responsible for setting up the routing
//We establish what component is rendered at what URL by making objects in the routes array



export const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Add this line
  { path: 'home', component:DashboardComponent },
  { path: 'todolist', component:TodolistComponent }

];
