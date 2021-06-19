import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RatingModule } from "./rating/rating.module";
import { ProductCardModule } from "./product-card/product-card.module";
import { IconTooltipModule } from "./icon-tooltip/icon-tooltip.module";
import { DropDownListModule } from "./drop-down-list/drop-down-list.module";
import {ButtonModule} from "./button/button.module";
import {ToggleModule} from "./toggle/toggle.module";
import {DropDownMenuModule} from "./drop-down-menu/drop-down-menu.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    ProductCardModule,
    IconTooltipModule,
    DropDownListModule,
    ButtonModule,
    ToggleModule,
    DropDownMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
