import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {SearchServiceService} from '../../services/search-service.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal.js';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.sass'],
  providers: [CustomerService, SearchServiceService]
})
export class CustomerListComponent implements OnInit {

  customers: any[] = [];
  totalRecords: number = 0;
  currentPage: number = 0;
  searchRequest: any = null;
  selectedCustomer: any;
  selectedCustomerD: any;
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
      type: 'TEXT',
      value: null
    }, {
      label: 'E-mail',
      fieldName: 'emailAddress',
      type: 'TEXT',
      value: null
    }
  ];

  constructor(private customerService: CustomerService,
              private searchServiceService: SearchServiceService) { }

  ngOnInit() {
    this.searchCustomer(this.searchRequest);
  }

  setCustomer(customer) {
    this.selectedCustomer = null;
    this.selectedCustomer = customer;
  }

  searchCustomer(requestObject) {
    this.totalRecords = 0;
    this.searchRequest = {
      sortingField: 'id',
      sortingDirection: 'ASC',
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

    this.searchServiceService.searchCustomers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.customers = data.searchItems;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.searchServiceService.searchCustomers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.customers = data.searchItems;
    });
  }

  loadCurrentPage() {
    this.selectedCustomer = null;
    this.searchServiceService.searchCustomers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.customers = data.searchItems;
    });
  }

  closePopUp() {
    $('#customerEditView').modal('toggle');
    $('.modal-backdrop').remove();
    this.selectedCustomer = null;
    this.loadCurrentPage();
  }

  selectForDelete(id) {
    this.selectedCustomerD = {
      id: id
    };
  }

  deleteCustomer(option) {
    if (option === 'Y') {
      const request = {
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        },
        id: this.selectedCustomerD.id
      };
      this.customerService.deleteCustomerById(request).subscribe(data => {
        this.actionMessage = {
          type: data.status === 'SUCCESS' ? 'SUCCESS' : 'ERROR',
          hasMessage: true,
          message: (data.message !== null ) ? data.message : 'Customer has been successfully removed'
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
    this.searchServiceService.searchCustomers(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.customers = data.searchItems;
    });
  }

}
