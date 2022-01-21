import { NgModule, LOCALE_ID, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RatingModule } from "./rating/rating.module";
import { IconTooltipModule } from "./icon-tooltip/icon-tooltip.module";
import { ButtonModule } from "./button/button.module";
import { ToggleModule } from "./toggle/toggle.module";
import { DropDownMenuModule } from "./drop-down-menu/drop-down-menu.module";
import { CatalogModule } from "./catalog/catalog.module";
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData} from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from "./cart/cart.module";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./services/data.service";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    IconTooltipModule,
    ButtonModule,
    ToggleModule,
    DropDownMenuModule,
    CatalogModule,
    NgbModule,
    CartModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru'
    },
    {
      provide : APP_INITIALIZER,
      useFactory : init,
      deps: [DataService] ,
      multi : true
    }],
  bootstrap: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule { }

export function init(service : DataService) {
  console.log("--1-- init in module app")
  return () => service.init();
}
