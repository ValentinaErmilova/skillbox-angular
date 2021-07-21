import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RatingModule } from "./rating/rating.module";
import { ProductCardModule } from "./product-card/product-card.module";
import { IconTooltipModule } from "./icon-tooltip/icon-tooltip.module";
import { DropDownListModule } from "./drop-down-list/drop-down-list.module";
import { ButtonModule } from "./button/button.module";
import { ToggleModule } from "./toggle/toggle.module";
import { DropDownMenuModule } from "./drop-down-menu/drop-down-menu.module";
import { CatalogModule } from "./catalog/catalog.module";
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from "./cart/cart.module";

registerLocaleData(localeRu);

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
    DropDownMenuModule,
    CatalogModule,
    NgbModule,
    CartModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru'
  }],
  bootstrap: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }
