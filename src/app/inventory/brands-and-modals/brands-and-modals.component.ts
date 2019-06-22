import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {BrandsService} from '../../services/brands.service';

@Component({
  selector: 'app-brands-and-modals',
  templateUrl: './brands-and-modals.component.html',
  styleUrls: ['./brands-and-modals.component.sass'],
  providers: [BrandsService]
})
export class BrandsAndModalsComponent implements OnInit {

  isSuccess = false;
  hasError = false;
  errorMessage: string = null;
  brandForm: FormGroup = new FormGroup({
    brandName: new FormControl(),
    modalList: new FormArray([])
  });

  brandList: any[] = [];
  searchRequest: any = {};
  totalRecords: number = 0;
  currentPage: number = 0;

  searchOptions: any[] =  [
    {
      label: 'Brand name',
      fieldName: 'brandName',
      type: 'TEXT',
      value: null
    }
  ];

  constructor(private brandsService: BrandsService) { }

  ngOnInit() {
    this.loadAllBrands();
  }

  createBrand() {
    const request = {
      brandName: this.brandForm.get('brandName').value
    };
    this.brandsService.create(request).subscribe(data =>  {
      if (data.status === 'FAILED')  {
        this.hasError = true;
        this.errorMessage = data.message;
      } else {
        this.isSuccess = true;
        this.hasError = false;
        this.loadAllBrands();
        this.brandForm.reset();
      }
    });

    setTimeout(() => {
      this.hasError = false;
      this.isSuccess = false;
    }, 3000);
  }

  loadAllBrands() {
    this.searchRequest = {
      currentPage: 0,
      sortingField: 'brandName',
      sortingDirection: 'ASC',
      brandName: null
    };
    const request = this.searchRequest;
    this.brandsService.loadAll(request).subscribe(data =>  {
      this.brandList = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

  goToPage(request) {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.brandsService.loadAll(this.searchRequest).subscribe(data =>  {
      this.brandList = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

  searchBrand(request) {
    this.totalRecords = 0;
    if (request != null && request.searchOptions != null) {
      for (const requestItem of request.searchOptions) {
        const fieldName = requestItem.fieldName;
        this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
      }
    }
    this.brandsService.loadAll(this.searchRequest).subscribe(data =>  {
      this.brandList = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

}
