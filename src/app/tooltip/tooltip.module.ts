import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import {RatingComponent} from "../rating/rating.component";



@NgModule({
  declarations: [
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipComponent
  ]
})
export class TooltipModule { }
