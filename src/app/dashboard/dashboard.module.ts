import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import {ChartsModule} from 'ng2-charts';
import { SummaryDashboardComponent } from './summary-dashboard/summary-dashboard.component';
import {DatePickerModule} from '@syncfusion/ej2-angular-calendars';
import {FormsModule} from '@angular/forms';
import {LoadingSpinnerModule} from '../common/loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    DatePickerModule,
    FormsModule,
    LoadingSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    SummaryDashboardComponent
  ],
  exports: [
    DashboardComponent,
    Dashboard2Component,
    Dashboard3Component,
    SummaryDashboardComponent
  ]
})
export class DashboardModule { }
