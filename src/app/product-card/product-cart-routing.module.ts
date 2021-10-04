import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ProductCardComponent} from "./product-card.component";

export const routes: Routes = [
  {
    path: ':id',
    component: ProductCardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductCartRoutingModule { }
