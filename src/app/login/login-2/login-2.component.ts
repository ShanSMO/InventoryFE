import { Component, OnInit } from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-login-2',
  templateUrl: './login-2.component.html',
  styleUrls: ['./login-2.component.sass'],
  providers: [UserService]
})
export class Login2Component implements OnInit {

  isLoginError: boolean = false;
  loginErrorMessage: string = null;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userPassword: new FormControl()
  });

  welcomeText: any = '';

  constructor(private userService: UserService, private route: Router,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.setWelcomeText();
  }

  setWelcomeText() {
    const currentTime = new Date();
    console.log(moment().format('a'));
    if (moment().format('a') === 'am') {
      this.welcomeText = 'Hi , Goode Morning !';
    } else {
      this.welcomeText = 'Hi , Goode Evening !';
    }

  }

  userLogin() {
    this.ngxService.start();
    this.userService.login(this.loginForm.value).subscribe(data => {
      if (data.status === 'SUCCESS') {
        localStorage.setItem('usr', JSON.stringify(data.responseObject));
        localStorage.setItem('login-status', 'true');
        localStorage.setItem('access_token', data.access_token);
        this.isLoginError = false;
        this.route.navigateByUrl('/dashboard-summary');
      } else {
        this.isLoginError = true;
        this.loginErrorMessage = data.message;

        setTimeout(() => {
          this.isLoginError = false;
        }, 5000);
      }
      this.ngxService.stop();
    });
  }
}
