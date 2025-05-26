import { Component } from '@angular/core';
import { ServiceComponent } from '../service/service.component';
import { CommonModule} from '@angular/common'; //CommonModule is needed for Angular directives like ngIf, ngFor, etc.
import { FormsModule } from '@angular/forms'; //FormsModule is needed for two-way data binding with ngModel




@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule], //Parent DashboardComponent will render child, we gotta import
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 
   constructor(public todoService: ServiceComponent) { } //Injecting the service to use its methods and properties
  //A component's TS file stores values and functions that affect the view and app behavior

  

  //Defining a variable to toggle the hidden div on and off
  hideDiv:boolean = false;

  toggleHideDiv() {
    //Toggling the boolean value to show or hide the div
    this.hideDiv = !this.hideDiv;
  }

  color:string = 'black'; //Defining a variable to hold the color value
    
  isHovered(isEnter: boolean){
    this.color = isEnter ? 'blue' : 'black'; //Changing the color based on hover state
  }

}
