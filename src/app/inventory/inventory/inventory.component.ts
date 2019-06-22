import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {SalesService} from '../../services/sales.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.sass'],
  providers: [CustomerService, ProductService, CategoryService, SalesService]
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
