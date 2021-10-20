import {Product} from "./product";

export class InCart {
  private _count: number = 0;
  private _product: Product = new Product();
  private _totalCost: number = 0;

  constructor(product: Product) {
    this.count++;
    this.product = product;
    this.totalCost = product.price.value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count++;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get totalCost(): number {
    return this._totalCost;
  }

  set totalCost(value: number) {
    this._totalCost += value;
  }
}
