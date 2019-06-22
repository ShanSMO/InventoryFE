import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminSettingsComponent],
  exports: [
    AdminSettingsComponent
  ]
})
export class AdminModule { }
