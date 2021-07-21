import {Product} from "./product";

export class InCart {
  count: number = 1;
  product?: Product;
  totalCost: number = 0;
}
