import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../services/common.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import {GlobalValidators} from '../../validators';
import * as $ from 'jquery';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.sass'],
  providers: [CustomerService, CommonService]
})
export class CustomerCreateComponent implements OnInit {

  customerCount = 0;
  isSuccess: boolean = false;

  menuItemList: any[] = [
    {label: 'New',  icon: 'fa fa-file'},
    {label: 'Save',  icon: 'fa fa-save'},
    {label: 'Copy',  icon: 'fa fa-files-o'},
    {label: 'Customer list',  icon: 'fa fa-list'},
    {label: 'Edit',  icon: 'fa fa-pencil'},
    {label: 'Order History',  icon: 'fa fa-history'}
  ];


  customerForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl(null, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_NAME)]),
    emailAddress: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_EMAIL)]),
    website: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_WEBSITE)]),
    phoneNumber: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    faxNumber: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    description: new FormControl(null),
    address: new FormGroup({
      id: new FormControl(null),
      houseNo: new FormControl(null),
      street: new FormControl(null),
      city: new FormControl(null),
      zipCode: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_ZIP_CODE)])
    })
  });

  customers: any[] = [];

  constructor(private customerService: CustomerService, private commonService: CommonService) { }

  ngOnInit() {
    this.loadCount();
    EnterFocus();
    backFocus();
  }

  createCustomer() {
    const requestBody = this.customerForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.customerService.createUpdateCustomer(requestBody).subscribe(response => {
      this.isSuccess = true;
      this.loadCount();
      this.customerForm.reset();
      $('[tabindex=1]').focus();

      setTimeout(() => {
        this.isSuccess = false;
      }, 5000);
    });
  }

  loadCount() {
    const requestBody = {};
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.commonService.getRecordCount(requestBody, 'CUSTOMER').subscribe(response => {
      this.customerCount = response.responseObject;
    });
  }
}
