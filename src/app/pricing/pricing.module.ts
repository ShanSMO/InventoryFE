import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PricingComponent
  ],
  exports: [
    PricingComponent
  ]
})
export class PricingModule { }
