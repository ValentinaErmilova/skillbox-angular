import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../types/product";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/catalog.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {
  private id: number;
  @Input() product: Product = new Product();

  constructor(public cartService: CartService,
              private catalogService: CatalogService,
              private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // TODO: needs to add a loader
    this.catalogService.getProductById(this.id, (r: Product) => this.product = r)
  }

}
