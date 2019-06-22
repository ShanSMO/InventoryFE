import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './supplier/supplier.component';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SupplierLayoutComponent } from './supplier-layout/supplier-layout.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import {RouterModule} from '@angular/router';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {SearchModule} from '../common/search/search.module';
import {CommonFormsModule} from '../common-forms/common-forms.module';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {PaginationModule} from '../common/pagination/pagination.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComTitleBarModule,
    SearchModule,
    CommonFormsModule,
    DatePickerModule,
    PaginationModule
  ],
  declarations: [SupplierComponent, SupplierLayoutComponent, SupplierListComponent],
  exports: [SupplierComponent, SupplierLayoutComponent, SupplierListComponent]
})
export class SupplierModule { }
