import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-layout',
  templateUrl: './supplier-layout.component.html',
  styleUrls: ['./supplier-layout.component.sass']
})
export class SupplierLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Supplier List',  icon: 'fa fa-list', routerLink: '/supplier-list'},
    {label: 'Create Supplier',  icon: 'fa fa-file', routerLink: '/suppliers'}
  ];

  constructor() { }

  ngOnInit() {
  }



}
