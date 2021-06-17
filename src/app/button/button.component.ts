import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
  template: '<button [ngStyle]="{\'background-color\': this.color, \'font-size\': this.fontSize}" ' +
    '[ngClass]="{active: this.isActive}" [disabled]="this.isDisabled">Click from component</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges, OnInit {

  @Input() color = "#4CAF50";
  @Input() fontSize = "15px";
  @Input() isActive = false;
  @Input() isDisabled = false;

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.color, this.isActive, this.fontSize, this.isDisabled)
  }
}
