import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  inCart = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.inCart++;
  }

  removeFromCart() {
    return this.inCart > 0 ? this.inCart-- : this.inCart;
  }
}
