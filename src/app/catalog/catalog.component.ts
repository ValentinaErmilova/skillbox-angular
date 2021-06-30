import { Component, OnInit } from '@angular/core';
import { products } from '../data/products.data';
import { Product } from "../types/product";
import { Cart } from "../types/cart";

@Component({
  selector: 'app-catalog',
  template: "<app-product-card [products] = products (onClick)='addToCart($event)'></app-product-card>",
  styles: []
})

export class CatalogComponent implements OnInit {
  products: Product[] = products;
  inCart: Array<Cart> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(cart: Cart) {
    let index = this.inCart.findIndex(c => c.product?.id == cart.product?.id);
    if (index != -1) {
      this.inCart.splice(index, 1);
    }
    this.inCart.push(cart);
    console.log(this.inCart);
  }
}
