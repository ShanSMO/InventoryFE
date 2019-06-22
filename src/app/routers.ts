import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {PricingComponent} from './pricing/pricing.component';
import {ProfileComponent} from './profile/profile/profile.component';
import {Dashboard2Component} from './dashboard/dashboard2/dashboard2.component';
import {AdminSettingsComponent} from './admin/admin-settings/admin-settings.component';
import {DailyAccountComponent} from './account/daily-account/daily-account.component';
import {LayoutCommonComponent} from './layouts/layout-common/layout-common.component';
import {Dashboard3Component} from './dashboard/dashboard3/dashboard3.component';
import {LoginComponent} from './login/login/login.component';
import {RegisterComponent} from './login/register/register.component';
import {ForgotPasswordComponent} from './login/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './login/reset-password/reset-password.component';
import {LayoutBlankComponent} from './layouts/layout-blank/layout-blank.component';
import {InventoryComponent} from './inventory/inventory/inventory.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {PurchaseOrderComponent} from './perchase-order/purchase-order/purchase-order.component';
import {CategoriesComponent} from './inventory/categories/categories.component';
import {SupplierComponent} from './supplier/supplier/supplier.component';
import {PurchaseOrderListComponent} from './perchase-order/purchase-order-list/purchase-order-list.component';
import {PurchaseOrderLayoutComponent} from './perchase-order/purchase-order-layout/purchase-order-layout.component';
import {StockComponent} from './inventory/stock/stock.component';
import {SalesComponent} from './sales/sales/sales.component';
import {SalesHistoryComponent} from './sales/sales-history/sales-history.component';
import {SalesLayoutComponent} from './sales/sales-layout/sales-layout.component';
import {SupplierLayoutComponent} from './supplier/supplier-layout/supplier-layout.component';
import {SupplierListComponent} from './supplier/supplier-list/supplier-list.component';
import {StockListComponent} from './inventory/stock-list/stock-list.component';
import {CustomerLayoutComponent} from './customer/customer-layout/customer-layout.component';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {ProductLayoutComponent} from './product/product-layout/product-layout.component';
import {ProductComponent} from './product/product/product.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {AppComponent} from './app.component';
import {PrivilegesComponent} from './login/privileges/privileges.component';
import {AccountLayoutComponent} from './account/account-layout/account-layout.component';
import {IncomeExpenseBalanceComponent} from './account/income-expense-balance/income-expense-balance.component';
import {InventoryLayoutComponent} from './inventory/inventory-layout/inventory-layout.component';
import {BrandsAndModalsComponent} from './inventory/brands-and-modals/brands-and-modals.component';
import {SummaryDashboardComponent} from './dashboard/summary-dashboard/summary-dashboard.component';
import {UserSettingsComponent} from './settings/user-settings/user-settings.component';
import {ReceiptSettingsComponent} from './settings/receipt-settings/receipt-settings.component';
import {SettingsLayoutComponent} from './settings/settings-layout/settings-layout.component';
import {PrivilegeSettingsComponent} from './settings/privilege-settings/privilege-settings.component';
import {UserRoleSettingsComponent} from './settings/user-role-settings/user-role-settings.component';
import {SubCategoriesComponent} from './inventory/sub-categories/sub-categories.component';
import {Login2Component} from './login/login-2/login-2.component';
import {SalesReceiptComponent} from './report/sales-receipt/sales-receipt.component';


export const routes: Routes = [

  {path: '', component: AppComponent, children: [
    {
      path: '', component: LayoutBlankComponent, children: [
      // { path: 'login', component: LoginComponent },
      { path: 'login', component: Login2Component },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotPasswordComponent},
      { path: 'pricing', component: PricingComponent }
    ]
    },

    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: SupplierLayoutComponent, children: [
        { path: 'suppliers', component: SupplierComponent},
        { path: 'supplier-list', component: SupplierListComponent},
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: ProductLayoutComponent, children: [
        { path: 'products', component: ProductComponent},
        { path: 'product-list', component: ProductListComponent},
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: CustomerLayoutComponent, children: [
        { path: 'customers', component: CustomerCreateComponent},
        { path: 'customer-list', component: CustomerListComponent},
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: PurchaseOrderLayoutComponent, children: [
        { path: 'po-list', component: PurchaseOrderListComponent},
        { path: 'po', component: PurchaseOrderComponent},
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: SalesLayoutComponent, children: [
        { path: 'sales', component: SalesComponent},
        { path: 'sales-history', component: SalesHistoryComponent},
        { path: 'receipt/:id', component: SalesReceiptComponent}
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: InventoryLayoutComponent, children: [
        { path: 'stock', component: StockComponent},
        { path: 'stock-list', component: StockListComponent},
        { path: 'categories', component: CategoriesComponent},
        { path: 'b-n-m', component: BrandsAndModalsComponent},
        { path: 'sub-categories', component: SubCategoriesComponent},
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: AccountLayoutComponent, children: [
        { path: 'income-expense', component: IncomeExpenseBalanceComponent},
        { path: 'sales-history', component: SalesHistoryComponent}
      ]}
     ]
    },
    {path: '', component: LayoutCommonComponent, children: [
      {path: '', component: SettingsLayoutComponent, children: [
        { path: 'user-settings', component: UserSettingsComponent},
        { path: 'receipt-settings', component: ReceiptSettingsComponent},
        { path: 'privilege-settings', component: PrivilegeSettingsComponent},
        { path: 'role-settings', component: UserRoleSettingsComponent},
      ]}
     ]
    },

    {path: '', component: LayoutCommonComponent, children: [
      { path: 'account', component: DailyAccountComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard2', component: Dashboard2Component },
      { path: 'dashboard3', component: Dashboard3Component },
      { path: 'profile', component: ProfileComponent },
      { path: 'admin-settings', component: AdminSettingsComponent },
      { path: 'reset', component: ResetPasswordComponent},
      { path: 'inventory', component: InventoryComponent},
      { path: 'privileges', component: PrivilegesComponent},
      { path: 'dashboard-summary', component: SummaryDashboardComponent},
    ]},
  ]},

  {
    path: '**', component: Login2Component
  }

];

