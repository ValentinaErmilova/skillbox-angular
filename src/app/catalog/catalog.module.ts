import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductModule } from "../product/product.module";
import { ToggleModule } from "../toggle/toggle.module";
import { AppRoutingModule } from "../app-routing.module";
import { CatalogService } from "../services/catalog.service";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    ToggleModule,
    AppRoutingModule
  ],
  exports: [
    CatalogComponent
  ],
  providers: [
    CatalogService
  ]
})
export class CatalogModule { }
