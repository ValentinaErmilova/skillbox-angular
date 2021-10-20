import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ProductCardModule } from "../product-card/product-card.module";
import { ToggleModule } from "../toggle/toggle.module";
import { AppRoutingModule } from "../app-routing.module";
import { CatalogService } from "../services/catalog.service";

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    ProductCardModule,
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
