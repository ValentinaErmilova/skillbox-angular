import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CatalogService} from "../../services/catalog.service";
import {Product} from '../../types/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = new Product();

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}
}
