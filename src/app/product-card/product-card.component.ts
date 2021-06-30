import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../types/product";
import {Cart} from "../types/cart";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() onClick = new EventEmitter<Cart>();

  constructor() { }

  ngOnInit(): void {
  }
}
