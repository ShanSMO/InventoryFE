import { Component, OnInit } from '@angular/core';
import {SalesService} from '../../services/sales.service';
import {SearchServiceService} from '../../services/search-service.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.sass'],
  providers: [SalesService, SearchServiceService]
})
export class SalesHistoryComponent implements OnInit {

  salesList: any[] = [];
  totalRecords = 0;
  currentPage = 0;
  searchRequest: any = null;
  selectedSale: any = null;
  selectedCustomer: any =  null;
  selectedSalesItems: any[] = [];

  searchOptions: any[] =  [
    {
      label: 'Customer Name',
      fieldName: 'firstName',
      type: 'TEXT',
      value: null
    } , {
      label: 'Phone Number',
      fieldName: 'phoneNumber',
      type: 'TEXT',
      value: null
    }, {
      label: 'From',
      fieldName: 'fromDate',
      type: 'DATE',
      value: null
    }, {
      label: 'To',
      fieldName: 'toDate',
      type: 'DATE',
      value: null
    }
  ];

  constructor(private salesService: SalesService,
              private route: Router,
              private searchServiceService: SearchServiceService) { }

  ngOnInit() {
    this.searchSale(this.searchRequest);
  }

  searchSale(requestObject) {
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
        if (fieldName === 'firstName') {
          const customer = {
              firstName: requestItem.value === '' ? null : requestItem.value
          };

          this.searchRequest['customer'] = customer;
        } else {
          this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
        }
      }
    }

    this.searchServiceService.searchSales(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.salesList = data.searchItems;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchServiceService.searchSales(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.salesList = data.searchItems;
    });
  }

  loadCurrentPage() {
    this.selectedSale = null;
    this.searchServiceService.searchSales(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.salesList = data.searchItems;
    });
  }

  setCustomerData(customer) {
    this.selectedCustomer = customer;
  }

  setItemData(sales) {
    this.selectedSalesItems = sales.salesOrderItems;
    this.selectedSale = sales;
  }

  printReceipt(id) {
    $('#salesItemView').modal('hide');
    $('.modal-backdrop').remove();
    this.route.navigateByUrl('/receipt/' + id);
  }

}
