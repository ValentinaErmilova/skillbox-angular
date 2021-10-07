import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from '../data/products.data';
import {Product} from "../types/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-catalog',
  templateUrl: "catalog.component.html",
  styles: []
})

export class CatalogComponent implements OnInit {
  public products: Product[] = [];
  @Output() addToCard = new EventEmitter<number>();
  //title?: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService) {
    //this.title = this.route.snapshot.data.title;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.sortBy(params.search));
    this.productService.getProducts().then(r => this.products = r).catch(e => this.products = products);
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
