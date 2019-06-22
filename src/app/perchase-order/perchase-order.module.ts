import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PurchaseOrderListComponent } from './purchase-order-list/purchase-order-list.component';
import {RouterModule} from '@angular/router';
import { PurchaseOrderLayoutComponent } from './purchase-order-layout/purchase-order-layout.component';
import {SearchModule} from '../common/search/search.module';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {CommonFormsModule} from '../common-forms/common-forms.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SearchModule,
    ComTitleBarModule,
    PaginationModule,
    CommonFormsModule
  ],
  declarations: [PurchaseOrderComponent, PurchaseOrderListComponent, PurchaseOrderLayoutComponent],
  exports: [PurchaseOrderComponent, PurchaseOrderListComponent, PurchaseOrderLayoutComponent]
})
export class PurchaseOrderModule { }
