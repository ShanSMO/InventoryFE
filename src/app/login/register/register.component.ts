import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CompanyService} from '../../services/company.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Location} from '@angular/common';
import {GlobalValidators} from '../../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [CompanyService]
})
export class RegisterComponent implements OnInit {

  hasMessage:boolean =  false;
  message:string =  '';

  registrationForm: FormGroup = new FormGroup({
    companyName: new FormControl(null, [Validators.required]),
    owner: new FormControl(null, [Validators.required]),
    contactNumber: new FormControl(null, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    userName: new FormControl(null, [Validators.required]),
    userPassword: new FormControl(null, [Validators.required])
  });

  constructor(private companyService: CompanyService,
              private router: Router,
              private _location: Location,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {
  }

  createAccount() {
    this.ngxService.start();
    if (this.registrationForm.invalid) {

    } else {
      this.companyService.create(this.registrationForm.value).subscribe(data => {
        if (data.status === 'SUCCESS') {
          this.hasMessage = true;
          this.registrationForm.reset();
          this.message = data.message;
          setTimeout(() => {
            this.router.navigateByUrl('/login');
            this.hasMessage = false;
          }, 5000);
        } else {
          this.message = data.message;
          setTimeout(() => {
            this.router.navigateByUrl('/login');
            this.hasMessage = false;
          }, 5000);
        }


      });
    }
    this.ngxService.stop();
  }

  goBack() {
    this._location.back();
  }

}
