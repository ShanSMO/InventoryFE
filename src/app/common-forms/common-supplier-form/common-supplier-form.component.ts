import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SupplierService} from '../../services/supplier.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import {GlobalValidators} from '../../validators';

@Component({
  selector: 'app-common-supplier-form',
  templateUrl: './common-supplier-form.component.html',
  styleUrls: ['./common-supplier-form.component.sass'],
  providers: [SupplierService]
})
export class CommonSupplierFormComponent implements OnInit {

  isSuccess: boolean = false;
  @Input() supplierData: any  = {};
  @Input() type: string  = 'Update';
  @Output() createSupplierEmit: EventEmitter<any> = new EventEmitter();

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

  constructor(private supplierService: SupplierService) { }

  ngOnInit() {
    if  (this.supplierData != null) {
      this.supplierForm = new FormGroup({
        id: new FormControl(this.supplierData.id, [Validators.required]),
        firstName: new FormControl(this.supplierData.firstName, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_NAME)]),
        emailAddress: new FormControl(this.supplierData.emailAddress, [Validators.pattern(GlobalValidators.VALIDATOR_EMAIL)]),
        website: new FormControl(this.supplierData.website, [Validators.pattern(GlobalValidators.VALIDATOR_WEBSITE)]),
        phoneNumber: new FormControl(this.supplierData.phoneNumber, [Validators.required, Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
        faxNumber: new FormControl(this.supplierData.faxNumber, [Validators.pattern(GlobalValidators.VALIDATOR_PHONE)]),
        remarks: new FormControl(this.supplierData.remarks),
        address: new FormGroup({
          id: new FormControl(this.supplierData.address.id),
          houseNo: new FormControl(this.supplierData.address.houseNo),
          street: new FormControl(this.supplierData.address.street),
          city: new FormControl(this.supplierData.address.city),
          zipCode: new FormControl(this.supplierData.address.zipCode, [Validators.pattern(GlobalValidators.VALIDATOR_ZIP_CODE)])
        })
      });
    }

    EnterFocus();
    backFocus();
  }

  createSupplier() {
    const requestBody = this.supplierForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    if (!this.supplierForm.invalid) {
      this.supplierService.createUpdateSupplier(requestBody).subscribe(data => {
        this.isSuccess = true;
        this.supplierForm.reset();
        this.createSupplierEmit.emit();
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      });
    }
  }

}
