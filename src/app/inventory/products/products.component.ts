import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {CategoryService} from '../../services/category.service';
import {BrandsService} from '../../services/brands.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  providers: [ProductService, CategoryService, BrandsService]
})
export class ProductsComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'New',  icon: 'fa fa-file'},
    {label: 'Save',  icon: 'fa fa-save'},
    {label: 'Copy',  icon: 'fa fa-files-o'},
    {label: 'Customer list',  icon: 'fa fa-list'},
    {label: 'Edit',  icon: 'fa fa-pencil'},
    {label: 'Order History',  icon: 'fa fa-history'}
  ];

  createCategory: boolean = false;
  categories: any[] = [];
  resourceFile: any = {};
  imageFile: any = null;
  imageForView: any = null;

  productList: any[] = [];
  brandList: any[] = [];

  productForm: FormGroup = new FormGroup({
    productCode: new FormControl(),
    barcode: new FormControl(),
    productName: new FormControl(),
    brand: new FormGroup({
      id: new FormControl()
    }),
    description: new FormControl(),
    productImageUrl: new FormControl(),
    category: new FormGroup({
      id: new FormControl()
    }),
    resourceFile: new FormGroup({
      fileName: new FormControl(),
      base64String: new FormControl(),
      fileExtention: new FormControl(),
      fileSize: new FormControl()
    }),
  });

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private brandService: BrandsService) { }

  ngOnInit() {
    this.loadAllCategories();
    this.loadAllProducts();
    this.loadAllBrands();
  }

  createProduct() {
    this.productForm.patchValue({resourceFile: this.resourceFile});
    const requestBody = this.productForm.value;
    // this.productService.createUpdate(requestBody).subscribe(data => {
    //   this.productForm.reset();
    //   this.imageFile = '';
    //   this.loadAllProducts();
    // });
  }

  loadAllCategories() {
    // this.categoryService.loadAll().subscribe(data => {
    //   this.categories = data.responseItems;
    // });
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

  loadAllProducts() {
    // this.productService.loadAll().subscribe(data => {
    //   this.productList = data.responseItems;
    // });
  }

  loadAllBrands() {
    // this.brandService.loadAll().subscribe(data => {
    //   this.brandList = data.responseItems;
    // });
  }

  openCategoryCreateForm() {
    this.createCategory = false;
    this.createCategory = true;
  }
}
