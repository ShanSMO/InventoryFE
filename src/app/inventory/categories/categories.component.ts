import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../services/category.service';
import {SearchServiceService} from '../../services/search-service.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import * as $ from 'jquery';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  providers: [CategoryService, SearchServiceService]
})
export class CategoriesComponent implements OnInit {

  actionMessage = {
    type: 'INFO',
    hasMessage: false,
    message: null
  };

  isSuccess: boolean = false;
  categories: any[] = [];
  imageFile: any = null;
  imageForView: any = null;
  resourceFile: any = {};
  description: any = null;
  searchRequest: any = {};
  totalRecords: number = 0;
  currentPage: number = 0;

  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl(null, [Validators.required]),
    description: new FormControl(this.description),
    resourceFile: new FormGroup({
      fileName: new FormControl(),
      base64String: new FormControl(),
      fileExtention: new FormControl(),
      fileSize: new FormControl()
    }),
  });

  searchOptions: any[] =  [
    {
      label: 'Category name',
      fieldName: 'categoryName',
      type: 'TEXT',
      value: null
    }
  ];

  selectedCategory: any = null;


  constructor(private categoryService: CategoryService,
              private searchService:  SearchServiceService) { }

  ngOnInit() {
    this.searchCategory(null);
    EnterFocus();
    backFocus();
  }

  createCategory() {
    this.categoryForm.patchValue({resourceFile: this.resourceFile});
    const requestBody = this.categoryForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.categoryService.createUpdate(requestBody).subscribe(data => {

      this.actionMessage = {
        type: data.status === 'SUCCESS' ? 'SUCCESS' : 'ERROR',
        hasMessage: true,
        message: (data.message !== null ) ? data.message : 'Category has been successfully created'
      };

      this.categoryForm.reset();
      this.imageForView = null;
      this.imageFile = null;
      this.resourceFile = {};
      $('[tabindex=1]').focus();
      this.searchRequest['categoryName'] = null;
      this.searchCategory(this.searchRequest);
      setTimeout(() => {
        this.actionMessage = {
          type: null,
          hasMessage: false,
          message: null
        };
      }, 3000);
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

  setFile(file) {

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });

  }

  readFile(event) {
    const file = event.target.files[0];

    this.setFile(file).then(
      data => {
        this.imageFile = data;
        this.imageForView = 'url(' + data + ')';

        this.resourceFile = {
          base64String: this.imageFile.split(',')[1],
          fileName: file.name,
          fileExtention: file.name.split('.')[1],
          fileSize: file.size
        };

      }
    );

    event = null;
  }

  searchCategory(request) {
    this.totalRecords = 0;
    if (request != null && request.searchOptions != null) {
      for (const requestItem of request.searchOptions) {
        const fieldName = requestItem.fieldName;
        this.searchRequest[fieldName] = requestItem.value === '' ? null : requestItem.value;
      }
    }

    if (request === null) {
      this.searchRequest['categoryName'] = this.categoryForm.get('categoryName').value;
    }

    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };

    this.searchRequest.currentPage = 0;

    this.searchService.searchCategory(this.searchRequest).subscribe(data => {
      this.categories = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchService.searchCategory(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.categories = data.searchItems;
    });
  }

  selectFroDelete(catId) {
    this.selectedCategory = catId;
  }

  removeCategory(type) {
    if (type === 'Y') {
      const request = {
        id: this.selectedCategory,
        company: {
          id: JSON.parse(localStorage.getItem('usr')).company.id
        }
      };

      this.categoryService.removeCategory(request).subscribe(data => {
        this.actionMessage = {
          type: data.status === 'SUCCESS' ? 'SUCCESS' : 'ERROR',
          hasMessage: true,
          message: (data.message !== null ) ? data.message : 'Category has been successfully removed'
        };

        this.loadCurrentPage();

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

  editCategory() {

  }

  loadCurrentPage() {
    this.currentPage = this.currentPage === 0 ? this.currentPage :
      (((this.totalRecords - 1) % 10) <= 10) && (((this.totalRecords - 1) % 10) > 0) ? this.currentPage  :
        this.currentPage - 1 ;

    this.searchRequest.currentPage = this.currentPage;
    this.totalRecords = 0;
    this.searchService.searchCategory(this.searchRequest).subscribe(data => {
      this.totalRecords = data.recordCount;
      this.categories = data.searchItems;
    });
  }

}
