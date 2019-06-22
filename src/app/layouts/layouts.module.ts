import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutBlankComponent } from './layout-blank/layout-blank.component';
import { LayoutCommonComponent } from './layout-common/layout-common.component';
import {CommonComponentModule} from '../common/common-com.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule,
    RouterModule
  ],
  declarations: [LayoutBlankComponent, LayoutCommonComponent],
  exports: [LayoutBlankComponent, LayoutCommonComponent]
})
export class LayoutsModule { }
