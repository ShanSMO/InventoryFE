import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order-layout',
  templateUrl: './purchase-order-layout.component.html',
  styleUrls: ['./purchase-order-layout.component.sass']
})
export class PurchaseOrderLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Purchase Order List',  icon: 'fa fa-save', routerLink: '/po-list'},
    {label: 'Purchase Order',  icon: 'fa fa-file', routerLink: '/po'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
