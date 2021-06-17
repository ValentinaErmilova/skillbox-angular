import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  template: '<p>drop-down-menu works!</p>' +
    '<app-menu></app-menu>' +
    '<app-button></app-button>',
  styleUrls: ['./drop-down-menu.component.scss']
})
export class DropDownMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
