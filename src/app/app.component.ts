import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedColor: string = '';
  selectedSize: string = '';
  isActive: boolean = false;
  isDisabled: boolean = false;

  color: List[] = [
    {value: "#4CAF50", viewValue: 'default'},
    {value: "#2334dd", viewValue: 'primary'},
    {value: "#9B21DD", viewValue: 'accent'},
    {value: "#ff00ae", viewValue: 'success'},
    {value: "#dddc0d", viewValue: 'warning'}
  ];
  size: List[] = [
    {value: "15px", viewValue: 'default'},
    {value: "30px", viewValue: 'large'},
    {value: "5px", viewValue: 'small'}
  ];
}
interface List {
  value: string;
  viewValue: string;
}
