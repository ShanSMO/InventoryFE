import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service';
import {GlobalProperties} from '../../global-properties';
import {SearchServiceService} from '../../services/search-service.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.sass'],
  providers: [StockService, SearchServiceService, CategoryService]
})
export class StockListComponent implements OnInit {

  stock: any[] = [];
  searchOps: any[] = [
    {
      label: 'Category Name',
      fieldName: 'category',
      type: 'SELECT',
      value: null,
      options: [
        {key: null, value: 'All'},
        {key: 1, value: 'Mouse'},
        {key: 'Memory Stick', value: 'Memory Stick'},
        {key: 'Speaker', value: 'Speaker'}
      ]
    }
  ];

  searchRequest: any = {};
  categoryList: any[] = [];
  optionList: any[] = [];


  constructor(private stockService:  StockService,
              private searchService: SearchServiceService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.loadStockAsGroup();
    this.loadAllCategories();
    this.searchOps[0].options = this.optionList;
  }

  loadStockAsGroup() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.stockService.loadAllAsGroup(request).subscribe(data => {
      this.stock  = data.responseItems;
    });
  }

  searchStock(request) {

    console.log(request);

    this.searchRequest = {};
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };

    if (request != null && request.searchOptions != null) {
      for (const requestItem of request.searchOptions) {
        const fieldName = requestItem.fieldName;
        if (fieldName === 'category') {
          const category = {
            id: requestItem.value === null ? null : requestItem.value
          };

          this.searchRequest['category'] = category;
        }
      }
    }

    this.searchService.searchStock(this.searchRequest).subscribe(data => {
      this.stock = data.searchItems;
    });
  }

  loadAllCategories() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.categoryService.loadAll(request).subscribe(data => {
      this.categoryList = data.responseItems;
      this.optionList.push({key: null, value: 'All'});
      for (const category of this.categoryList) {
        const option = {key: category.id, value: category.categoryName};
        this.optionList.push(option);
      }
    });
  }
}
