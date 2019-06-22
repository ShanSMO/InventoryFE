import { Component, OnInit } from '@angular/core';
import {TosServiceService} from '../../services/tos-service.service';
import {CompanyService} from '../../services/company.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalProperties} from '../../global-properties';

@Component({
  selector: 'app-receipt-settings',
  templateUrl: './receipt-settings.component.html',
  styleUrls: ['./receipt-settings.component.sass'],
  providers: [TosServiceService, CompanyService]
})
export class ReceiptSettingsComponent implements OnInit {

  showMessage: boolean = false;
  companyForm: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    companyName: new FormControl(null, [Validators.required]),
    owner: new FormControl(null, [Validators.required]),
    contactNumber: new FormControl(null, [Validators.required]),
    companyLogo: new FormControl(null),
    resourceFile: new FormGroup({
      fileName: new FormControl(),
      base64String: new FormControl(),
      fileExtention: new FormControl(),
      fileSize: new FormControl()
    })
  });

  termsAndConditions: any[] = [];
  tos: any = null;
  imageForView: any = null;
  resourceFile: any = {};
  imageFile: any = null;
  resourceUrl: any = GlobalProperties.RESOURCE_URL;

  constructor(private tosServiceService: TosServiceService, private companyService: CompanyService) { }

  ngOnInit() {
    this.loadTos();
    this.loadCompanyData();
  }

  addTos() {
    const tosObj = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      tos: this.tos
    };

    this.tosServiceService.create(tosObj).subscribe(data => {
      this.termsAndConditions.push(data.responseObject);
    });
    this.tos = null;
  }

  remove(tos) {
    this.tosServiceService.remove(tos).subscribe(data => {
      this.loadTos();
    });
  }

  loadTos() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.tosServiceService.loadAll(request).subscribe(data => {
      this.termsAndConditions = data.responseItems;
    });
  }

  setFile(file) {

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  }

  readFile(event) {
    const file = event.target.files[0];

    this.setFile(file).then(
      data => {
        this.imageFile = data;
        this.imageForView = 'url(' + data + ')';

        this.resourceFile = {
          base64String: this.imageFile.split(',')[1],
          fileName: file.name,
          fileExtention: file.name.split('.')[1],
          fileSize: file.size
        };

      }
    );
  }

  loadCompanyData() {
    const reqeust = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.companyService.loadById(reqeust).subscribe(data => {
      if (data.status === 'SUCCESS') {

        this.imageForView = 'url(' + this.resourceUrl + data.responseObject.companyLogo + ')';
        this.companyForm = new FormGroup({
          id: new FormControl(data.responseObject.id, [Validators.required]),
          companyName: new FormControl(data.responseObject.companyName, [Validators.required]),
          owner: new FormControl(data.responseObject.owner, [Validators.required]),
          contactNumber: new FormControl(data.responseObject.contactNumber, [Validators.required]),
          companyLogo: new FormControl(data.responseObject.companyLogo),
          resourceFile: new FormGroup({
            fileName: new FormControl(),
            base64String: new FormControl(),
            fileExtention: new FormControl(),
            fileSize: new FormControl()
        })
        });
      }
    });
  }

  updateData() {
    this.companyForm.patchValue({resourceFile: this.resourceFile});
    const request = this.companyForm.value;
    this.companyService.update(request).subscribe(data => {
    this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    });
  }
}
