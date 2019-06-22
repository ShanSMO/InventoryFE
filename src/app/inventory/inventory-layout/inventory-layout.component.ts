import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-layout',
  templateUrl: './inventory-layout.component.html',
  styleUrls: ['./inventory-layout.component.sass']
})
export class InventoryLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Categories',  icon: 'fa fa-save', routerLink: '/categories'},
    {label: 'Sub Categories',  icon: 'fa fa-save', routerLink: '/sub-categories'},
    {label: 'Brands/Modals',  icon: 'fa fa-files-o', routerLink: '/b-n-m'},
    {label: 'Stock',  icon: 'fa fa-list', routerLink: '/stock'},
    {label: 'Stock As List',  icon: 'fa fa-pencil', routerLink: '/stock-list'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
