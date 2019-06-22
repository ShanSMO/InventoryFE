import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import {RouterModule} from '@angular/router';
import {CommonComponentModule} from '../common/common-com.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {CommonFormsModule} from '../common-forms/common-forms.module';

@NgModule({
  imports: [
    CommonModule,
    MenuBarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonComponentModule,
    PaginationModule,
    DatePickerModule,
    CommonFormsModule
  ],
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerLayoutComponent
  ],
  exports: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerListComponent,
    CustomerLayoutComponent
  ],

})
export class CustomerModule { }
