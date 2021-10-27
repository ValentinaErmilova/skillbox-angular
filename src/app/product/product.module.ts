import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { ButtonModule } from "../button/button.module";
import { BadgeModule } from "../badge/badge.module";
import {ProductShowRoutingModule} from "./product-show/product-show-routing.module";
import { ProductShowComponent } from './product-show/product-show.component';

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductShowComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    ProductShowRoutingModule
  ],
  exports: [
    ProductItemComponent
  ]
})
export class ProductModule { }
