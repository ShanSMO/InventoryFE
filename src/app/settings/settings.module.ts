import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ReceiptSettingsComponent } from './receipt-settings/receipt-settings.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import {RouterModule} from '@angular/router';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComTitleBarModule} from '../common/com-title-bar/com-title-bar.module';
import {SearchModule} from '../common/search/search.module';
import {PaginationModule} from '../common/pagination/pagination.module';
import { PrivilegeSettingsComponent } from './privilege-settings/privilege-settings.component';
import { UserRoleSettingsComponent } from './user-role-settings/user-role-settings.component';
import { CompanySettingsComponent } from './company-settings/company-settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MenuBarModule,
    FormsModule,
    ComTitleBarModule,
    ReactiveFormsModule,
    SearchModule,
    PaginationModule
  ],
  declarations: [
    UserSettingsComponent,
    ReceiptSettingsComponent,
    SettingsLayoutComponent,
    PrivilegeSettingsComponent,
    UserRoleSettingsComponent,
    CompanySettingsComponent],
  exports: [
    UserSettingsComponent,
    ReceiptSettingsComponent,
    SettingsLayoutComponent,
    PrivilegeSettingsComponent,
    UserRoleSettingsComponent,
    CompanySettingsComponent]
})
export class SettingsModule { }
