import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ButtonModule } from "../button/button.module";
import { BadgeModule } from "../badge/badge.module";
import {ProductCartRoutingModule} from "./product-cart-routing.module";

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    ProductCartRoutingModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
