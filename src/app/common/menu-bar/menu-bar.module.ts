import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuBarComponent} from './menu-bar/menu-bar.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [MenuBarComponent],
  exports: [MenuBarComponent]
})
export class MenuBarModule { }
