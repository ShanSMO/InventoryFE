import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../services/category.service';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import * as $ from 'jquery';


@Component({
  selector: 'app-common-category-form',
  templateUrl: './common-category-form.component.html',
  styleUrls: ['./common-category-form.component.sass'],
  providers: [CategoryService]
})
export class CommonCategoryFormComponent implements OnInit {

  type: any = 'CAT';
  categories: any[] = [];
  imageFile: any = null;
  imageForView: any = null;
  resourceFile: any = {};
  description: any = null;
  searchRequest: any = {};
  totalRecords: number = 0;
  currentPage: number = 0;
  parentCategory: any = null;
  isSuccess: boolean = false;

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


  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    EnterFocus();
    backFocus();
    this.loadCategories();
  }

  createCategory() {
    this.categoryForm.patchValue({resourceFile: this.resourceFile});

    if (this.type === 'CAT') {
      const requestBody = this.categoryForm.value;
      requestBody['company'] = {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      };
      this.categoryService.createUpdate(requestBody).subscribe(data => {
        this.isSuccess = true;
        this.categoryForm.reset();
        this.imageForView = null;
        $('[tabindex=1]').focus();
        setTimeout(() => {
          this.isSuccess = false;
        }, 3000);
      });
    } else {
      const requestBody = this.categoryForm.value;
      requestBody['company'] = {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      };
      requestBody['category'] = this.parentCategory;
      this.categoryService.createUpdateSub(requestBody).subscribe(data => {
        this.isSuccess = true;
        this.categoryForm.reset();
        this.imageForView = null;
        $('[tabindex=1]').focus();
        setTimeout(() => {
          this.isSuccess = false;
        }, 3000);
      });
    }
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
  }

  loadCategories() {
    this.categories = [];
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.categoryService.loadAll(request).subscribe(data => {
      this.categories = data.responseItems;
    });
  }

}
