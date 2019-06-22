import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {SearchServiceService} from '../../services/search-service.service';
import {ActiveStatusService} from '../../services/active-status.service';
import * as $ from 'jquery';
import 'bootstrap/js/dist/modal.js';
import {BrandsService} from '../../services/brands.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  providers: [ProductService, SearchServiceService, ActiveStatusService, BrandsService, CategoryService]
})
export class ProductListComponent implements OnInit {

  selectedProduct: any = null;
  selectedDelProduct: any = null;
  productList: any[] = [];
  searchOptionTemp: any[] = [];
  searchOptions: any[] =  [
    {
      label: 'Product Name',
      fieldName: 'productName',
      type: 'TEXT',
      value: null
    }, {
      label: 'Category',
      fieldName: 'category',
      type: 'SELECT',
      value: null,
      options: [{key: null, value: 'Any'}]
    }, {
      label: 'Sub Category',
      fieldName: 'subCategory',
      type: 'SELECT',
      value: null,
      options: [{key: null, value: 'Any'}]
    }, {
      label: 'Brand',
      fieldName: 'brand',
      type: 'SELECT',
      value: null,
      options: [{key: null, value: 'Any'}]
    }, {
      label: 'Barcode',
      fieldName: 'barcode',
      type: 'NUMBER',
      value: null
    }, {
      label: 'Status',
      fieldName: 'status',
      type: 'SELECT',
      value: 0,
      options: [
        {key: null, value: 'Any'},
        {key: 0, value: 'Active'},
        {key: 1, value: 'Blocked'},
        {key: 4, value: 'Inactive'}
        ]
    }
  ];

  totalRecords: number = 0;
  currentPage: number = 0;
  searchRequest: any = {};
  activeStatus: any[] = [];
  actionMessage = {
    type: 'INFO',
    hasMessage: false,
    message: null
  };

  constructor(private productService: ProductService,
              private activeStatusService: ActiveStatusService,
              private brandService: BrandsService,
              private categoryService: CategoryService,
              private searchServiceService: SearchServiceService) { }

  ngOnInit() {
    this.searchProduct(this.searchRequest);
    this.loadAllCategories();
    this.loadAllBrands();
  }

  searchProduct(requestObject) {

    this.currentPage = 0;
    let categorySearched = null;
    this.totalRecords = 0;
    this.searchRequest = {
      sortingField: 'id',
      sortingDirection: 'ASC',
      currentPage: this.currentPage,
      status: 0
    };
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    if (requestObject != null && requestObject.searchOptions != null) {
      for (const requestItem of requestObject.searchOptions) {
        const fieldName = requestItem.fieldName;
        if (fieldName === 'category') {
          const category = {
            id: requestItem.value === '' ? null : requestItem.value
          };

          this.searchRequest['category'] = category;
          categorySearched = category;

        } else if (fieldName === 'barcode') {
          this.searchRequest['barcode'] = requestItem.value === '' ? null : requestItem.value;

        } else if (fieldName === 'subCategory') {
          const category = {
            id: requestItem.value === '' ? null : requestItem.value
          };
          this.searchRequest['subCategory'] = category;

        } else if (fieldName === 'brand') {
          const brand = {
            id: requestItem.value === '' ? null : requestItem.value
          };

          this.searchRequest['brand'] = brand;

        } else if (fieldName === 'status') {
          if (requestItem.value !== 'null') {
            this.searchRequest['status'] = requestItem.value;
          } else {
            this.searchRequest['status'] = null;
          }
        } else  {
          this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
        }
      }

      this.searchOptionTemp = requestObject.searchOptions;
    }

    this.searchServiceService.searchProducts(this.searchRequest).subscribe(data => {
      this.productList = data.searchItems;
      this.totalRecords = data.recordCount;
      this.loadAllSubCategories(categorySearched);
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchServiceService.searchProducts(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.productList = data.searchItems;
    });
  }

  setSelectedProduct(product) {
    this.selectedProduct = product;
    this.activeStatusService.loadAll().subscribe(data => {
      this.activeStatus = data.responseItems;
    });
  }

  loadCurrentPage(searchRequest) {
    this.selectedProduct = null;
    // this.searchProduct(this.searchRequest);
    this.searchProduct(searchRequest);
  }

  closePopUp(event) {
    $('#productEditView').modal('toggle');
    $('.modal-backdrop').remove();
    this.selectedProduct = null;
    this.loadAfterEdit(this.searchOptionTemp, event);

  }

  loadAllSubCategories(parentCategory) {

    if (parentCategory !== null && parentCategory.id !== 'null' && parentCategory.id !== null) {
      this.searchOptions = [];
      const request = {
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        },
        category: {
          id: parentCategory.id
        }
      };

      this.categoryService.loadAllSubCategories(request).subscribe(data => {
        this.searchOptionTemp[2].options = [];
        this.searchOptionTemp[2].options.push({key: null, value: 'Any'});
        for (const subCategory of data.responseItems) {
          this.searchOptionTemp[2].options.push({key: subCategory.id, value: subCategory.categoryName});
        }
        this.searchOptions = this.searchOptionTemp;
      });
    } else {
      this.searchOptionTemp = this.searchOptions;
      this.searchOptions = [];
      this.searchOptionTemp[2].options = [];
      this.searchOptionTemp[2].options.push({key: null, value: 'Any'});
      this.searchOptions = this.searchOptionTemp;
    }
  }

  loadAllCategories() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };

    this.categoryService.loadAll(request).subscribe(data => {
      for (const category of data.responseItems) {
        this.searchOptions[1].options.push({key: category.id, value: category.categoryName});
      }
    });
  }

  loadAllBrands() {
    // this.searchOptions[2].options.push({key: null, value: 'All'});
    this.brandService.loadAllB().subscribe(data => {
      for (const brand of data.responseItems) {
        this.searchOptions[3].options.push({key: brand.id, value: brand.brandName});
      }
    });
  }

  loadAfterEdit(searchRequest, event) {
    this.searchServiceService.searchProducts(this.searchRequest).subscribe(data => {
      this.productList = data.searchItems;
      this.totalRecords = data.recordCount;
      if (event.status === 'UPDATED') {
        this.actionMessage = {
          type: 'SUCCESS',
          hasMessage: true,
          message: 'Product has been successfully updated'
        };
        setTimeout(() => {
          this.actionMessage = {
            type: null,
            hasMessage: false,
            message: null
          };
        }, 3000);
      }
    });
  }

  selectForDelete(id) {
    this.selectedDelProduct = {
      id: id
    };
  }

  deleteProduct(option) {
    if (option === 'Y') {
      const request = {
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        },
        id: this.selectedDelProduct.id
      };
      this.productService.deleteProductById(request).subscribe(data => {
        this.actionMessage = {
          type: data.status === 'SUCCESS' ? 'SUCCESS' : 'ERROR',
          hasMessage: true,
          message: (data.message !== null ) ? data.message : 'Product has been successfully removed'
        };
        this.loadCurrentPageD();
        setTimeout(() => {
          this.actionMessage = {
            type: null,
            hasMessage: false,
            message: null
          };
        }, 3000);
      });
    }
  }

  loadCurrentPageD() {
    this.currentPage = this.currentPage === 0 ? this.currentPage :
      (((this.totalRecords - 1) % 10) <= 10) && (((this.totalRecords - 1) % 10) > 0) ? this.currentPage  :
        this.currentPage - 1 ;

    this.searchRequest.currentPage = this.currentPage;
    this.totalRecords = 0;
    this.searchServiceService.searchProducts(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.productList = data.searchItems;
    });
  }
}
