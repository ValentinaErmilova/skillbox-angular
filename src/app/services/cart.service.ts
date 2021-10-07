import { Injectable } from '@angular/core';
import { InCart } from '../types/inCart';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private _counter: number = 0;
  public sortOfProductsInCart: Array<InCart> = [];
  constructor() { }

  addToCart(product: Product) {
    this._counter++;
    let existsProducts = this.sortOfProductsInCart.find(p => p.product.id == product.id);
    if (existsProducts) {
      existsProducts.count++;
      existsProducts.totalCost = product.price.value;
    } else {
      this.sortOfProductsInCart = [new InCart(product), ...this.sortOfProductsInCart];
    }
  }

  removeItemFromCart(item: InCart) {
    let index = this.sortOfProductsInCart.indexOf(item);
    if (index > -1) {
      this._counter = this._counter - item.count;
      this.sortOfProductsInCart.splice(index, 1);
    }
  }

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
  }
}
