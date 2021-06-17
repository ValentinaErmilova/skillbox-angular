import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  template: '<p [ngStyle]="{\'display\': this.isOpen ? \'block\' : \'none\'}">menu works!</p>',
  styles: []
})
export class MenuComponent implements OnInit {
  @Input() isOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

}
