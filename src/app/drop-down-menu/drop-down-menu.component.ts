import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down-menu',
  template: '<p>drop-down-menu works!</p>' +
    '<app-menu [isOpen]="isOpen"></app-menu>' +
    '<app-button (click)="isOpen=!isOpen" (mouseenter)="isOpen=false" (mouseleave)="isOpen=true"></app-button>',
  styles: []
})
export class DropDownMenuComponent implements OnInit {

  isOpen: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
}
