import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from '../data/products.data';
import {Product} from "../types/product";
import {InCart} from "../types/inCart";

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styles: []
})

export class CatalogComponent implements OnInit {
  public inCart: Array<InCart> = [];
  products: Product[] = products;
  countInCart: number = 0;
  @Output() addToCard = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
  }

  addToCart(product: InCart) {
    this.removeItemToCart(product);
    this.countInCart = this.countInCart + product.count;
    this.inCart.push(product);
    this.addToCard.emit(this.countInCart);
  }

  removeItemToCart(product: InCart) {
    let index = this.inCart.indexOf(product);
    if (index != -1) {
      let existsProduct = this.inCart[index];
      this.countInCart = this.countInCart - existsProduct.count;
      this.inCart.splice(index, 1);
    }
  }
}
