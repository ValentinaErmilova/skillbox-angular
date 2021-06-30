import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
