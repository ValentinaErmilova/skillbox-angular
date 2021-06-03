import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RatingModule } from "./rating/rating.module";
import { ProductCardModule } from "./product-card/product-card.module";
import { IconTooltipModule } from "./icon-tooltip/icon-tooltip.module";
import { DropDownListModule } from "./drop-down-list/drop-down-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    ProductCardModule,
    IconTooltipModule,
    DropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
