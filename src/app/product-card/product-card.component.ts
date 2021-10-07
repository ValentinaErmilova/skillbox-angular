import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  public id?: number;
  public params?: {[ key : string ] : string};

  constructor(private route: ActivatedRoute,
              public cartService: CartService) {
    this.id = route.snapshot.params['id'];
    this.params = route.snapshot.queryParams;
  }

  ngOnInit(): void {
  }
}
