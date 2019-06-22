import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductLayoutComponent } from './product-layout/product-layout.component';
import {SearchModule} from '../common/search/search.module';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {CommonFormsModule} from '../common-forms/common-forms.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {CommonComponentModule} from '../common/common-com.module';
import {MessagePopupModule} from '../common/message-popup/message-popup.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonFormsModule,
    ComTitleBarModule,
    SearchModule,
    PaginationModule,
    MessagePopupModule
  ],
  declarations: [ProductComponent, ProductListComponent, ProductLayoutComponent],
  exports: [ProductComponent, ProductListComponent, ProductLayoutComponent]
})
export class ProductModule { }
