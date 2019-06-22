import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MessagePopupComponent} from './message-popup.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MessagePopupComponent
  ],
  exports: [
    MessagePopupComponent
  ]
})
export class MessagePopupModule { }
