import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InventoryLayoutComponent } from './inventory-layout/inventory-layout.component';
import {RouterModule} from '@angular/router';
import {CommonFormsModule} from '../common-forms/common-forms.module';
import { StockComponent } from './stock/stock.component';
import { InventorySettingsComponent } from './inventory-settings/inventory-settings.component';
import { StockListComponent } from './stock-list/stock-list.component';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {SearchModule} from '../common/search/search.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import { BrandsAndModalsComponent } from './brands-and-modals/brands-and-modals.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';

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
    PaginationModule
  ],
  declarations: [
    InventoryComponent,
    ProductsComponent,
    CategoriesComponent,
    InventoryLayoutComponent,
    StockComponent,
    InventorySettingsComponent,
    StockListComponent,
    BrandsAndModalsComponent,
    SubCategoriesComponent],
  exports: [
    InventoryComponent,
    ProductsComponent,
    CategoriesComponent,
    InventoryLayoutComponent,
    StockComponent,
    StockListComponent,
    InventorySettingsComponent,
    BrandsAndModalsComponent,SubCategoriesComponent]
})
export class InventoryModule { }
