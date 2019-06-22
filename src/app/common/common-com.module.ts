import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import {CommonMapModule} from './common-map/common-map.module';
import {RouterModule} from '@angular/router';
import {MenuBarModule} from './menu-bar/menu-bar.module';
import {SearchModule} from './search/search.module';
import {ComTitleBarModule} from './com-title-bar/com-title-bar.module';
import {NotificationModule} from './notification/notification.module';
import {MessagePopupModule} from './message-popup/message-popup.module';
import {LoadingSpinnerModule} from './loading-spinner/loading-spinner.module';

@NgModule({
  imports: [
    CommonModule,
    CommonMapModule,
    RouterModule,
    MenuBarModule,
    SearchModule,
    ComTitleBarModule,
    NotificationModule,
    MessagePopupModule,
    LoadingSpinnerModule
  ],
  declarations: [
    SideNavigationComponent,
  ],
  exports: [
    SideNavigationComponent,
    CommonMapModule,
    ComTitleBarModule,
    SearchModule,
    NotificationModule,
    MessagePopupModule,
    LoadingSpinnerModule
  ]
})
export class CommonComponentModule { }
