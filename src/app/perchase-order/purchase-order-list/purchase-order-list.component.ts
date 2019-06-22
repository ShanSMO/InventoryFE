import { Component, OnInit } from '@angular/core';
import {PurchaseOrderService} from '../../services/purchase-order.service';
import {SearchServiceService} from '../../services/search-service.service';

@Component({
  selector: 'app-purchase-order-list',
  templateUrl: './purchase-order-list.component.html',
  styleUrls: ['./purchase-order-list.component.sass'],
  providers: [PurchaseOrderService, SearchServiceService]
})
export class PurchaseOrderListComponent implements OnInit {

  purchaseOrders: any[] = [];
  selectedSupplier: any = null;
  totalRecords: number = 0;
  currentPage: number = 0;
  searchRequest: any = null;
  selectedSalesItems: any[] = [];

  searchOptions: any[] =  [
    {
      label: 'Supplier Name',
      fieldName: 'vendor',
      type: 'TEXT',
      value: null
    }, {
      label: 'Order Id',
      fieldName: 'purchaseOrderId',
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

  constructor(private purchaseOrderService: PurchaseOrderService,
              private searchServiceService: SearchServiceService) { }

  ngOnInit() {
    this.searchPO(this.searchRequest);
  }

  setSelectedSupplierData(vendor) {
    this.selectedSupplier = vendor;
  }

  searchPO(requestObject) {

    this.totalRecords = 0;
    this.searchRequest = {
      sortingField: 'createdDate',
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
        if (fieldName === 'vendor') {
          const vendorName = {
            firstName: requestItem.value === '' ? null : requestItem.value
          };
          this.searchRequest['vendor'] = vendorName;
        } else {
          this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
        }
      }
    }

    this.searchServiceService.searchPurchaseOrder(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.purchaseOrders = data.searchItems;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.searchServiceService.searchPurchaseOrder(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.purchaseOrders = data.searchItems;
    });
  }

  loadCurrentPage() {
    this.searchServiceService.searchPurchaseOrder(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.purchaseOrders = data.searchItems;
    });
  }

  setItemData(items) {
    this.selectedSalesItems = items;
  }

}
