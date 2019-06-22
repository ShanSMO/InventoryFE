import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../services/supplier.service';
import {CommonService} from '../../services/common.service';
import {SearchServiceService} from '../../services/search-service.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal.js';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.sass'],
  providers: [SupplierService, CommonService, SearchServiceService]
})
export class SupplierListComponent implements OnInit {

  suppliers: any[] = [];
  selectedSupplier: any = null;
  selectedSupplierD: any = null;
  actionMessage = {
    type: 'INFO',
    hasMessage: false,
    message: null
  };

  searchOptions: any[] =  [
    {
      label: 'Name',
      fieldName: 'firstName',
      type: 'TEXT',
      value: null
    } , {
      label: 'Phone Number',
      fieldName: 'phoneNumber',
      type: 'NUMBER',
      value: null
    }, {
      label: 'E-mail',
      fieldName: 'emailAddress',
      type: 'TEXT',
      value: null
    }
  ];

  totalRecords: number = 0;
  searchRequest: any = null;
  currentPage: number = 0;

  constructor(private supplierService: SupplierService,
              private commonService: CommonService,
              private searchServiceService: SearchServiceService) { }

  ngOnInit() {
    this.loadAllSupppliers();
  }

  loadAllSupppliers() {
    this.suppliers = [];
    this.searchSupplier(this.searchRequest);
  }

  setSupplierData(supplier) {
    this.selectedSupplier = null;
    this.selectedSupplier = supplier;
  }

  searchSupplier(requestObject) {
    this.totalRecords = 0;
    this.searchRequest = {
      sortingField: 'emailAddress',
      sortingDirection: 'DESC',
      currentPage: this.currentPage
    };
    this.searchRequest.currentPage = 0;
    this.searchRequest['company'] = {
        id: JSON.parse(localStorage.getItem('usr')).company.id
    };

    if (requestObject != null && requestObject.searchOptions != null) {
      for (const requestItem of requestObject.searchOptions) {
        const fieldName = requestItem.fieldName;
        this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
      }
    }

    this.searchServiceService.searchSuppliers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.suppliers = data.searchItems;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.searchServiceService.searchSuppliers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.suppliers = data.searchItems;
    });
  }

  loadCurrentPage() {
    this.selectedSupplier = null;
    this.searchServiceService.searchSuppliers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.suppliers = data.searchItems;
    });
  }

  closePopUp() {
    $('#supplierEditView').modal('toggle');
    $('.modal-backdrop').remove();
    this.selectedSupplier = null;
    this.loadCurrentPage();
  }

  selectForDelete(id) {
    this.selectedSupplierD = {
      id: id
    };
  }

  deleteSupplier(option) {
    if (option === 'Y') {
      const request = {
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        },
        id: this.selectedSupplierD.id
      };
      this.supplierService.deleteSupplierById(request).subscribe(data => {
        this.actionMessage = {
          type: data.status === 'SUCCESS' ? 'SUCCESS' : 'ERROR',
          hasMessage: true,
          message: (data.message !== null ) ? data.message : 'Supplier has been successfully removed'
        };

        this.loadCurrentPageD();
        setTimeout(() => {
          this.actionMessage = {
            type: null,
            hasMessage: false,
            message: null
          };
        }, 3000);
      });
    }
  }

  loadCurrentPageD() {
    this.currentPage = this.currentPage === 0 ? this.currentPage :
      (((this.totalRecords - 1) % 10) <= 10) && (((this.totalRecords - 1) % 10) > 0) ? this.currentPage  :
        this.currentPage - 1 ;

    this.searchRequest.currentPage = this.currentPage;
    this.totalRecords = 0;
    this.searchServiceService.searchSuppliers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.suppliers = data.searchItems;
    });
  }
}
