import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/product";
import {Cart} from "../types/cart";

@Component({
  selector: 'app-button',
  template: '<button (click)="addToCart(product)">Добавить в корзину</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<Cart>();
  @Input() product: any;
  count: number = 0;

  constructor() { }

  ngOnInit(): void {}

  addToCart(product: Product) {
    let productInCart = new Cart();
    productInCart.count = this.count++;
    productInCart.product = product;
    this.onClick.emit(productInCart)
  }
}
