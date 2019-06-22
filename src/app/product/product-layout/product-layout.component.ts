import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.sass']
})
export class ProductLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Product List',  icon: 'fa fa-list', routerLink: '/product-list'},
    {label: 'Create Product',  icon: 'fa fa-save', routerLink: '/products'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
