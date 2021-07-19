import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCardModule } from "../product-card/product-card.module";
import {DropDownListModule} from "../drop-down-list/drop-down-list.module";
import {ToggleModule} from "../toggle/toggle.module";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule,
    DropDownListModule,
    ToggleModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
