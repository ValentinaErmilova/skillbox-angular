import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../services/cart.service";
import {CatalogService} from "../services/catalog.service";
import {Product} from '../types/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor(public route: ActivatedRoute,
              public cartService: CartService) {
    if (history?.state?.data) {
      this.product = history?.state?.data[0];
    }
  }

  ngOnInit(): void {}
}
