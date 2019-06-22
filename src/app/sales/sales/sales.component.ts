import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SalesService} from '../../services/sales.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import {StockService} from '../../services/stock.service';
import * as $ from 'jquery';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.sass'],
  providers: [CustomerService, ProductService, CategoryService, SalesService , StockService]
})
export class SalesComponent implements OnInit {

  viewPriceList = false;
  sellingDate: any = new Date();
  selectedCategory: any = null;
  selectedProduct: any = null;
  categories: any[] = [];
  productList: any[] = [];
  customers: any[] = [];
  currency: any = {currency: {code: 'LKR', symbol: 'Rs.'}};
  currentStock = 0;
  totalDiscount = 0;

  orderItemForm: FormGroup = new FormGroup({
    product: new FormControl(),
    quantity: new FormControl(null, [Validators.required, Validators.min(1)]),
    sellingPrice: new FormControl(0),
    discount: new FormControl(0),
    subTotal: new FormControl(0)
  });

  orderItems: any[] = [];
  totalAmount: any = 0;
  printable: boolean = false;

  qty: any = 0;
  unitPrice: any = 0;
  discount: any = 0;
  customerSel: any = null;
  isAvailable = false;
  barcode: number;
  itemsTemp: any[] = [];
  stockList: any[] = [];
  productInfo: any = null;

  constructor(private customerService: CustomerService,
              private productService: ProductService,
              private salesService: SalesService,
              private route: Router,
              private stockService: StockService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadAllCategories();
    this.loadCustomerList();
    EnterFocus();
    backFocus();
  }

  addItemToList() {
    this.itemsTemp = [];
    this.orderItemForm.get('subTotal').setValue((this.orderItemForm.get('quantity').value * this.orderItemForm.get('sellingPrice').value) - this.orderItemForm.get('discount').value) ;
    const orderItem = this.orderItemForm.value;

    const request = {
      id: this.orderItemForm.get('product').value,
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.productService.loadById(request).subscribe(data => {
      orderItem['product'] = data.responseObject;
    });

    this.orderItems.push(orderItem);
    this.totalAmount = this.totalAmount + this.orderItemForm.get('subTotal').value;
    this.totalDiscount = this.totalDiscount + this.orderItemForm.get('discount').value;
    this.orderItemForm.reset();
    this.selectedCategory = null;
    this.selectedProduct = null;
    this.barcode = null;
    this.itemsTemp = this.orderItems;
  }

  removeItemFromList(item) {
    this.totalAmount = this.totalAmount - item.subTotal;
    if (this.discount !== null) {
      this.totalDiscount = this.totalDiscount - item.discount;
    }
    this.orderItems.splice(this.orderItems.indexOf(item), 1);
  }

  loadCustomerList() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.customerService.loadAllCustomers(request).subscribe(data => {
      this.customers = data.responseItems;
    });
  }

  loadAllCategories() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.categoryService.loadAll(request).subscribe(data => {
      this.categories = data.responseItems;
    });
  }

  loadAllProductsByCategory(event) {

    const requestBody = {
      category: {
        id: this.selectedCategory
      }
    };
    this.productService.loadAllByCategory(requestBody).subscribe(data => {
      this.productList = data.responseItems;
    });
  }

  getResponse(event) {
  }

  createUpdateSales() {
    const request = {
      customer: {
        id: this.customerSel
      },
      saleDate: new Date(),
      orderAmount: this.totalAmount,
      status: 'SUCCESS',
      salesOrderItems: this.orderItems,
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };

    this.salesService.createUpdate(request).subscribe(data => {
      this.printable = true;
      this.totalAmount = 0;
      this.orderItems = [];
      this.orderItemForm.reset();
      this.customerSel = null;
      this.route.navigateByUrl('receipt/' + data.responseObject.id);
    });
  }

  loadByBarcode() {

    if (this.barcode != null)  {
      const request = {
        barcode: this.barcode,
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        }
      };

      this.salesService.loadByBarcode(request).subscribe(data => {
        if (data.responseItems != null && data.responseItems.length  > 0) {
          this.stockList = data.responseItems;
          this.viewPriceList = true;
          this.selectedCategory = data.responseItems[data.responseItems.length - 1].product.category.id;
          this.loadAllProductsByCategory(null);

          this.orderItemForm = new FormGroup({
            product: new FormControl(data.responseItems[data.responseItems.length - 1].product.id),
            quantity: new FormControl(),
            sellingPrice: new FormControl(data.responseItems[data.responseItems.length - 1].sellingPrice),
            discount: new FormControl(),
            subTotal: new FormControl()
          });

          this.unitPrice = data.responseItems[data.responseItems.length - 1].sellingPrice;
          this.qty = 1;

          this.currentStock = data.responseObject.count;
          this.isAvailable = data.responseObject.count > 0 ;
          this.selectedProduct = data.responseItems[data.responseItems.length - 1].product.id;
          if (data.responseItems.length !== 1) {
            $('#priceList').modal('show');
          }
        } else  {
          this.unitPrice = 0;
          this.qty = 0;
          this.isAvailable = false;
          this.selectedCategory = null;
          this.selectedProduct = null;
        }
      });
    }
  }

  loadByProduct(product) {
    const request = {
      product: {
        id: product
      }
    };
    this.stockService.loadByProduct(request).subscribe(data => {

      if (data.responseItems.length  > 0) {
        this.unitPrice = data.responseItems[data.responseItems.length - 1].sellingPrice;
        this.qty = data.responseObject.count > 0 ? 1 : 0;
        this.currentStock = data.responseObject.count;
        this.isAvailable = data.responseObject.count > 0 ;
      } else  {
        this.unitPrice = 0;
        this.qty = 0;
        this.isAvailable = false;
      }
    });
  }

  setPrice(stockItem) {
    this.unitPrice = stockItem.sellingPrice;
    this.orderItemForm.patchValue({sellingPrice: stockItem.sellingPrice});
    $('#priceList').modal('hide');
  }

  loadProductById(productId): any {
    const request = {
      id: productId,
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.productService.loadById(request).subscribe(data => {
      this.productInfo = data.responseObject;
    });

    return this.productInfo;
  }
}
