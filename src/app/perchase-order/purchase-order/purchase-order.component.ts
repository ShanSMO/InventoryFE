import { Component, OnInit } from '@angular/core';
import {SupplierService} from '../../services/supplier.service';
import {PurchaseOrderService} from '../../services/purchase-order.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {GlobalProperties} from '../../global-properties';
import {CategoryService} from '../../services/category.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import * as $ from 'jquery';
import {SalesService} from '../../services/sales.service';


@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.sass'],
  providers: [SupplierService,  PurchaseOrderService, ProductService, CategoryService, SalesService]
})
export class PurchaseOrderComponent implements OnInit {

  isSuccess: boolean = false;

  createProduct = false;
  createCategory = false;
  type = 'BARCODE';
  barcode: any;

  discount: any = 0;
  vendor: any = null;
  selectedCategory: any = null;
  selectedSubCategory: any = null;
  selectedProduct: any = null;
  product: any = null;
  orderItemList: any[] = [];
  categories: any[] = [];
  subCategories: any[] = [];
  purchaseOrder: any = {};

  productList: any[] = [];
  suppliers: any[] = [];
  currency: any = {currency: {code: 'LKR', symbol: 'Rs.'}};
  totalAmount = 0.00;
  qty: any = 0;
  unitPrice: any = 0;
  subTotal: any = this.qty * this.unitPrice;
  paidAmount = 0;
  imageUrl: any = null;
  totalDiscount = 0;

  orderItemForm: FormGroup = new  FormGroup({
    product: new FormControl(null, [Validators.required]),
    quantity: new FormControl(0, [Validators.required, Validators.min(1)]),
    buyingPrice: new FormControl(0, [Validators.required, Validators.min(1)]),
    sellingPrice: new FormControl(0),
    discount: new FormControl(0),
    subTotal: new FormControl(0)
  });

  constructor(private supplierService: SupplierService,
              private purchaseOrderService: PurchaseOrderService,
              private categoryService: CategoryService,
              private salesService: SalesService,
              private productService: ProductService) { }

  ngOnInit() {
    this.loadAllCategories();
    this.loadAllSuppliers();
    EnterFocus();
    backFocus();
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

  loadAllSuppliers() {
    this.suppliers = [];
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.supplierService.loadAllSuppliers(request).subscribe(response => {
      this.suppliers = response.responseItems;
    });
  }

  createUpdatePo() {
    this.purchaseOrder = {
      createdDate: new Date(),
      vendor: {
        id: this.vendor.id
      },
      totalAmount: this.totalAmount,
      purchaseOrderItems: this.orderItemList,
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };

    this.purchaseOrderService.createUpdatePucahseOrder(this.purchaseOrder).subscribe(data => {
      this.isSuccess = true;
      this.orderItemForm.reset();
      this.vendor = null;
      this.orderItemList = [];
      this.subTotal = 0;
      this.totalAmount = 0.00;

      this.selectedCategory = null;
      this.selectedSubCategory = null;
      this.selectedProduct = null;
      this.barcode = null;

      setTimeout(() => {
        this.isSuccess = false;
      }, 3000);
    });
  }

  addOrderItemToList() {
    if (!this.orderItemForm.invalid) {
      this.orderItemForm.get('subTotal').setValue(this.orderItemForm.get('quantity').value * this.orderItemForm.get('buyingPrice').value - this.orderItemForm.get('discount').value) ;
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

      this.totalDiscount = this.totalDiscount + this.orderItemForm.get('discount').value;
      this.orderItemList.push(orderItem);
      this.totalAmount = this.totalAmount + this.orderItemForm.get('subTotal').value;
      this.clearForm();
      $('[tabindex=2]').focus();
    }
  }

  viewImage(url) {
    this.imageUrl = GlobalProperties.RESOURCE_URL + url;
  }

  removeItemFromList(item) {
    this.totalAmount = this.totalAmount - item.subTotal;
    if (this.discount !== null) {
      this.totalDiscount = this.totalDiscount - item.discount;
    }
    this.orderItemList.splice(this.orderItemList.indexOf(item), 1);
    this.clearForm();
  }

  newProductOpen()  {
    this.createProduct = true;
  }

  newProductClose()  {
    this.createProduct = false;
  }

  openCategoryCreateForm() {
    this.createCategory = false;
    this.createCategory = true;
  }

  loadAllSubCategories(event) {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      category: {
        id: this.selectedCategory
      }
    };

    this.categoryService.loadAllSubCategories(request).subscribe(data => {
      this.subCategories = data.responseItems;
    });
  }

  loadByBarcode() {
    const request = {
      barcode: this.barcode,
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.salesService.loadByBarcode(request).subscribe(data => {
        this.selectedCategory = data.responseObject.product.category.id;
        this.loadAllSubCategories(null);
        this.selectedSubCategory = data.responseObject.product.subCategory.id;
        this.loadAllProductsByCategory(null);
        this.product = data.responseObject.product.id;
        this.loadProductById(this.product);
        this.orderItemForm.get('product').setValue(data.responseObject.product.id);
    });
  }

  loadProductById(productId) {
    const requestBody = {
      id: productId
    };
    this.productService.loadById(requestBody).subscribe(data => {
      this.selectedProduct = data.responseObject;
    });
  }

  clearForm() {
    this.orderItemForm.reset();
    this.selectedCategory = null;
    this.selectedSubCategory = null;
    this.selectedProduct = null;
    this.barcode = null;
  }
}
