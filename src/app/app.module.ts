import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from "./button/button.module";
import { RatingModule } from "./rating/rating.module";
import { BadgeModule } from "./badge/badge.module";
import { IconModule } from "./icon/icon.module";
import { TooltipModule } from "./tooltip/tooltip.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    RatingModule,
    BadgeModule,
    IconModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
