import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { SalesLayoutComponent } from './sales-layout/sales-layout.component';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {SearchModule} from '../common/search/search.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonFormsModule} from '../common-forms/common-forms.module';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {ReportModule} from '../report/report.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule,
    SearchModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonFormsModule,
    ComTitleBarModule,
    PaginationModule,
    ReportModule
  ],
  declarations: [SalesComponent, SalesHistoryComponent, SalesLayoutComponent],
  exports: [SalesComponent, SalesHistoryComponent, SalesLayoutComponent]
})
export class SalesModule { }
