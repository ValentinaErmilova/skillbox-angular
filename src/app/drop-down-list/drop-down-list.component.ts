import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnInit {
  @Input() label = "";
  @Input() list: List[] = [{value: "", viewValue: ''}];
  @Output() updateValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  selectChangeHandler (event: any) {
    this.updateValue.emit(event.target.value);
  }
}
interface List {
  value: string;
  viewValue: string;
}
