import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  isLoginError: boolean = false;
  loginErrorMessage: string = null;
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userPassword: new FormControl()
  });

  constructor(private userService: UserService, private route: Router,
              private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
  }

  userLogin() {
    this.ngxService.start();
    this.userService.login(this.loginForm.value).subscribe(data => {
      if (data.status === 'SUCCESS') {
          localStorage.setItem('usr', JSON.stringify(data.responseObject));
          localStorage.setItem('login-status', 'true');
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
