import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {PricingModule} from './pricing/pricing.module';
import {RouterModule} from '@angular/router';
import {routes} from './routers';
import {ProfileModule} from './profile/profile.module';
import {CommonComponentModule} from './common/common-com.module';
import {AccountModule} from './account/account.module';
import {AdminModule} from './admin/admin.module';
import {LayoutsModule} from './layouts/layouts.module';
import {LoginModule} from './login/login.module';
import {InventoryModule} from './inventory/inventory.module';
import {CustomerModule} from './customer/customer.module';
import {FormsModule} from '@angular/forms';
import {PurchaseOrderModule} from './perchase-order/perchase-order.module';
import {HttpClientModule} from '@angular/common/http';
import {SupplierModule} from './supplier/supplier.module';
import {SalesModule} from './sales/sales.module';
import {ProductModule} from './product/product.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {ReportModule} from './report/report.module';
import {SettingsModule} from './settings/settings.module';
import {NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, SPINNER} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#070707',
  'bgsOpacity': 0.5,
  'bgsPosition': 'top-right',
  'bgsSize': 25,
  'bgsType': 'rectangle-bounce',
  'blur': 5,
  'fgsColor': '#004e55',
  'fgsPosition': 'center-center',
  'fgsSize': 60,
  'fgsType': 'square-loader',
  'gap': 24,
  'logoPosition': 'center-left',
  'logoSize': 70,
  'logoUrl': '',
  'overlayColor': 'rgba(255,255,255,0.3)',
  'pbColor': '#005d68',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': true,
  'text': '... Processing ...',
  'textColor': '#5f5f5f',
  'textPosition': 'center-center',
  'threshold': 500
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardModule,
    PricingModule,
    ProfileModule,
    RouterModule.forRoot(routes),
    CommonComponentModule,
    AccountModule,
    AdminModule,
    LayoutsModule,
    LoginModule,
    InventoryModule,
    CustomerModule,
    FormsModule,
    PurchaseOrderModule,
    SupplierModule,
    SalesModule,
    ProductModule,
    ReportModule,
    SettingsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    // NgxUiLoaderRouterModule
    NgxUiLoaderHttpModule

  ],
  providers: [{provide: LocationStrategy,
    useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
