import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from '../data/products.data';
import {Product} from "../types/product";
import {InCart} from "../types/inCart";
import {ActivatedRoute, Router} from "@angular/router";

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
  //title?: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    //this.title = this.route.snapshot.data.title;
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.sortBy(params.search));
  }

  setSearch(search: string) {
    if (!search) {
      this.sortBy("");
      return;
    }
    this.router.navigate(['.'],
      {
        relativeTo: this.route,
        queryParams: { search }
      })
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

  sortBy(search: string) {
    const data = this.products.slice();
    if(!search) {
      this.products = data;
      return;
    }
    this.products = data.filter(p => {
      return p.title?.toLocaleLowerCase().includes(search);
    });
  }
}
