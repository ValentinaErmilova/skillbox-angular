import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../types/product";
import {InCart} from "../types/inCart";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() products: Product[] = [];
  @Output() onClick = new EventEmitter<InCart>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
}
