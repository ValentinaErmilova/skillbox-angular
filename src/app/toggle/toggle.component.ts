import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  // template: '{{label}} <input type="checkbox" (change)="set($event)"/>',
  template: '<label class="switch">\n' +
    '  <input type="checkbox" (change)="set($event)">\n' +
    '  <span class="slider round"></span>\n' +
    '</label>',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Output() updateToggleValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  set(event: any) {
    this.updateToggleValue.emit(event.target.checked);
  }
}
