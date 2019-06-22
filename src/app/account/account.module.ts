import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyAccountComponent } from './daily-account/daily-account.component';
import {CommonComponentModule} from '../common/common-com.module';
import {ChartsModule} from 'ng2-charts';
import { IncomeExpenseBalanceComponent } from './income-expense-balance/income-expense-balance.component';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import {RouterModule} from '@angular/router';
import {MenuBarModule} from '../common/menu-bar/menu-bar.module';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentModule,
    ChartsModule,
    RouterModule,
    MenuBarModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DailyAccountComponent, IncomeExpenseBalanceComponent, AccountLayoutComponent],
  exports: [
    DailyAccountComponent,
    IncomeExpenseBalanceComponent,
    AccountLayoutComponent
  ]
})
export class AccountModule { }
