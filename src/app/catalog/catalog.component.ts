import {Component, Input, OnInit} from '@angular/core';
import { products } from '../data/products.data';
import { Product } from "../types/product";
import { InCart } from "../types/inCart";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styles: []
})

export class CatalogComponent implements OnInit {
  products: Product[] = products;
  public inCart: Array<InCart> = [];
  countInCart: number = 0;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  addToCart(product: InCart) {
    this.removeItemToCart(product);
    this.countInCart = this.countInCart + product.count;
    this.inCart.push(product);
  }

  removeItemToCart(product: InCart) {
    let index = this.inCart.indexOf(product);
    if (index != -1) {
      let existsProduct = this.inCart[index];
      this.countInCart = this.countInCart - existsProduct.count;
      this.inCart.splice(index, 1);
    }
  }

  open() {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.inCart = this.inCart;
    modalRef.result.then((item) => this.removeItemToCart(item));
  }
}
