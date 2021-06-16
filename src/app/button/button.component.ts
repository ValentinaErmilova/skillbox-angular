import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button [ngStyle]="{\'background-color\': this.color, \'font-size\': this.fontSize}">Click from component</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit {

  @Input() color = "#FFFFFF";
  @Input() fontSize = "15px";

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {}
}
