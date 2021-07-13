import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {InCart} from "../types/inCart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() inCart?: Array<InCart>;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }

  delete(product: InCart) {
   this.activeModal.close(product);
  }
}

