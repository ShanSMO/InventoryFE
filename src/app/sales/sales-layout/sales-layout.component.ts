import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-layout',
  templateUrl: './sales-layout.component.html',
  styleUrls: ['./sales-layout.component.sass']
})
export class SalesLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Sales History',  icon: 'fa fa-save', routerLink: '/sales-history'},
    {label: 'New Sale',  icon: 'fa fa-file', routerLink: '/sales'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
