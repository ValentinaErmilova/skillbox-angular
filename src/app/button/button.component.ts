import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/product";

@Component({
  selector: 'app-button',
  template: '<button class="btn btn-success" (click)="addToCart($event)">Добавить в корзину</button>',
  styles: []
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<Product>();
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {}

  addToCart($event: Event) {
    $event.stopPropagation();
    this.onClick.emit(this.product)
  }
}
