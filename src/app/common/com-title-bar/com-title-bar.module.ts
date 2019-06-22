import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComTitleBarComponent } from './com-title-bar/com-title-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComTitleBarComponent],
  exports: [ComTitleBarComponent]
})
export class ComTitleBarModule { }
