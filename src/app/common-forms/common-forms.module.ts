import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCustomerFormComponent } from './common-customer-form/common-customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonSupplierFormComponent } from './common-supplier-form/common-supplier-form.component';
import { CommonProductFormComponent } from './common-product-form/common-product-form.component';
import { CommonCategoryFormComponent } from './common-category-form/common-category-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [CommonCustomerFormComponent, CommonSupplierFormComponent, CommonProductFormComponent, CommonCategoryFormComponent],
  exports: [CommonCustomerFormComponent, CommonSupplierFormComponent, CommonProductFormComponent, CommonCategoryFormComponent]
})
export class CommonFormsModule { }
