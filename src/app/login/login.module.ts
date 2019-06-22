import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonComponentModule} from '../common/common-com.module';
import { PrivilegesComponent } from './privileges/privileges.component';
import { Login2Component } from './login-2/login-2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CommonComponentModule
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent, PrivilegesComponent, Login2Component],
  exports: [LoginComponent, RegisterComponent, ResetPasswordComponent, ForgotPasswordComponent, PrivilegesComponent]
})
export class LoginModule { }
