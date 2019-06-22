import { Component, OnInit } from '@angular/core';
import {BrandsService} from '../../services/brands.service';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {backFocus, EnterFocus} from '../../common-actions/enter-focus';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass'],
  providers: [ProductService, CategoryService, BrandsService]
})
export class ProductComponent implements OnInit {

  productCount: number = 0;
  isSuccess: boolean = false;
  isError: boolean = false;
  error: string = '';
  categories: any[] = [];
  subCategories: any[] = [];
  resourceFile: any = {};
  imageFile: any = null;
  imageForView: any = null;
  description: string = null;
  brandList: any[] = [];
  createCategory: boolean = false;

  productForm: FormGroup = new FormGroup({
    barcode: new FormControl(),
    productModel: new FormControl(),
    productName: new FormControl(null, [Validators.required]),
    brand: new FormGroup({
      id: new FormControl(null, [Validators.required])
    }),
    description: new FormControl(this.description),
    productImageUrl: new FormControl(),
    category: new FormGroup({
      id: new FormControl(null, [Validators.required])
    }),
    subCategory: new FormGroup({
      id: new FormControl(null, [Validators.required])
    }),
    resourceFile: new FormGroup({
      fileName: new FormControl(),
      base64String: new FormControl(),
      fileExtention: new FormControl(),
      fileSize: new FormControl()
    }),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private brandService: BrandsService) { }

  ngOnInit() {
    this.loadAllCategories();
    this.loadAllBrands();
    EnterFocus();
    backFocus();
    this.getCount();
  }

  createProduct() {
    this.productForm.patchValue({resourceFile: this.resourceFile});
    this.productForm.patchValue({description: this.description});
    const requestBody = this.productForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.productService.createUpdate(requestBody).subscribe(data => {

      if (data.status === 'SUCCESS') {
        this.isSuccess = true;
        this.productForm.reset();
        this.imageFile = '';
        this.imageForView = null;
        $('[tabindex=1]').focus();
        this.getCount();
        setTimeout(() => {
          this.isSuccess = false;
        }, 3000);
      } else {
        this.isError = true;
        this.error = data.message;
        setTimeout(() => {
          this.isError = false;
        }, 3000);
      }

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
      if (this.categories !== null && this.categories.length > 0) {
        this.loadAllSubCategories();
      }
    });
  }

  loadAllSubCategories() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      category: {
        id: this.productForm.get('category').value.id
      }
    };

    this.categoryService.loadAllSubCategories(request).subscribe(data => {
      this.subCategories = data.responseItems;
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
  }

  loadAllBrands() {
    this.brandService.loadAllB().subscribe(data => {
      this.brandList = data.responseItems;
    });
  }

  getCount() {
    const requestBody = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.productService.loadAll(requestBody).subscribe(data => {
      this.productCount = data.responseItems.length;
    });
  }

  openCategoryCreateForm() {
    this.createCategory = false;
    this.createCategory = true;
  }

}
