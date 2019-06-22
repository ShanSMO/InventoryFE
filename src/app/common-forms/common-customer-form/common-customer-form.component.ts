import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import {GlobalValidators} from '../../validators';


@Component({
  selector: 'app-common-customer-form',
  templateUrl: './common-customer-form.component.html',
  styleUrls: ['./common-customer-form.component.sass'],
  providers: [CustomerService]
})
export class CommonCustomerFormComponent implements OnInit {

  isSuccess: boolean = false;
  @Input() formType: string = 'Save';
  @Input() customerData: any  = {};
  @Output() createCustomerEmit: EventEmitter<any> = new EventEmitter();
  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    firstName: new FormControl(null, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_NAME)]),
    lastName: new FormControl(),
    emailAddress: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_EMAIL)]),
    website: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_WEBSITE)]),
    phoneNumber: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    faxNumber: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
    description: new FormControl(),
    address: new FormGroup({
      id: new FormControl(),
      houseNo: new FormControl(),
      street: new FormControl(),
      city: new FormControl(),
      zipCode: new FormControl(null, [Validators.pattern(GlobalValidators.VALIDATOR_ZIP_CODE)])
    })
  });

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    if (this.customerData !== null) {
      this.customerForm = new FormGroup({
        id: new FormControl(this.customerData.id, [Validators.required]),
        firstName: new FormControl(this.customerData.firstName, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_NAME)]),
        lastName: new FormControl(this.customerData.lastName),
        emailAddress: new FormControl(this.customerData.emailAddress, [Validators.pattern(GlobalValidators.VALIDATOR_EMAIL)]),
        website: new FormControl(this.customerData.website, [Validators.pattern(GlobalValidators.VALIDATOR_WEBSITE)]),
        phoneNumber: new FormControl(this.customerData.phoneNumber, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
        faxNumber: new FormControl(this.customerData.faxNumber, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
        description: new FormControl(this.customerData.description),
        address: new FormGroup({
          id: new FormControl(this.customerData.address.id),
          houseNo: new FormControl(this.customerData.address.houseNo),
          street: new FormControl(this.customerData.address.street),
          city: new FormControl(this.customerData.address.city),
          zipCode: new FormControl(this.customerData.address.zipCode, [Validators.pattern(GlobalValidators.VALIDATOR_ZIP_CODE)])
        })
      });
    }
    EnterFocus();
    backFocus();
  }

  createCustomer() {
    if (this.customerForm.invalid) {

    } else {
      const requestBody = this.customerForm.value;
      requestBody['company'] = {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      };
      this.customerService.createUpdateCustomer(requestBody).subscribe(response => {
        this.isSuccess = true;
        this.customerForm.reset();
        this.createCustomerEmit.emit();
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      });
    }
  }

}
