import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {InCart} from "../types/inCart";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Output() onClick = new EventEmitter<InCart>();
  public id?: number;
  public params?: {[ key : string ] : string};

  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.params = route.snapshot.queryParams;
  }

  ngOnInit(): void {
  }
}
