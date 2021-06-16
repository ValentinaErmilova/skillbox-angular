import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  selectedColor: string = '';
  selectedSize: string = '';
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
interface List {
  value: string;
  viewValue: string;
}
