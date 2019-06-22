import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../services/supplier.service';
import {CommonService} from '../../services/common.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import * as $ from 'jquery';
import {GlobalValidators} from '../../validators';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.sass'],
  providers: [SupplierService, CommonService]
})
export class SupplierComponent implements OnInit {

  supplierCount: number = 0;
  isSuccess: boolean = false;

  supplierForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(null, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_NAME)]),
    emailAddress: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_EMAIL)]),
    website: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_WEBSITE)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    faxNumber: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    remarks: new FormControl(),
    address: new FormGroup({
      id: new FormControl(),
      houseNo: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      zipCode: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_ZIP_CODE)])
    })
  });

  constructor(private supplierService: SupplierService, private commonService: CommonService) { }

  ngOnInit() {
    this.loadCount();
    EnterFocus();
    backFocus();
  }

  createSupplier() {
    const requestBody = this.supplierForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.supplierService.createUpdateSupplier(requestBody).subscribe(data => {
      this.isSuccess = true;
      this.supplierForm.reset();
      this.loadCount();
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
    this.commonService.getRecordCount(requestBody, 'SUPPLIER').subscribe(response => {
      this.supplierCount = response.responseObject;
    });
  }


}
