import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {products} from '../data/products.data';
import {Product} from "../types/product";
import {InCart} from "../types/inCart";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styles: []
})

export class CatalogComponent implements OnInit {
  products: Product[] = products;
  public inCart: Array<InCart> = [];
  countInCart: number = 0;
  selectedSortBy: string = '';
  sortBy: List[] = [
    {value: 'all', viewValue: 'Показать все'},
    {value: 'exists', viewValue: 'В наличии'},
    {value: 'discount', viewValue: 'Со скидкой'}
  ];

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

  sortBySelected(turnOn: any, sortBy: string) {
    console.log(turnOn,  sortBy);
    const data = this.products.slice();
    if(!turnOn) {
      this.products = data;
      return;
    }

    this.products = data.sort((a, b) => {
      switch (sortBy) {
        case 'all': return compare(a.title, b.title);
        case 'discount': return compare(a.price?.discount, b.price?.discount);
        case 'exists': return compare(a.availability, b.availability);
        default: return 0;
      }
    });
  }
}

function compare(a: any, b: any) {
  return (a < b ? -1 : 1) * 1;
}

interface List {
  value: string;
  viewValue: string;
}
