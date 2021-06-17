import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: '{{label}} <input type="checkbox" (change)="set($event)"/>',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input() label = "";
  @Output() updateValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  set(event: any) {
    console.log('toggle',event.target.checked )
    this.updateValue.emit(event.target.checked);
  }
}
