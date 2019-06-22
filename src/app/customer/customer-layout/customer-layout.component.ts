import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.sass']
})
export class CustomerLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Customer List',  icon: 'fa fa-list', routerLink: '/customer-list'},
    {label: 'Create Customer',  icon: 'fa fa-file', routerLink: '/customers'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
