import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalProperties} from '../../global-properties';
import {ProductService} from '../../services/product.service';
import {BrandsService} from '../../services/brands.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-common-product-form',
  templateUrl: './common-product-form.component.html',
  styleUrls: ['./common-product-form.component.sass'],
  providers: [ProductService, CategoryService, BrandsService]
})
export class CommonProductFormComponent implements OnInit {

  @Input() type: any = 'UPDATE';
  @Input() selectedCategory: any = null;
  @Input() productData: any = null;
  @Input() activeStatus: any = null;
  @Output() updateProductEmit: EventEmitter<any> = new EventEmitter();

  isSuccess: boolean = false;
  isError: boolean = false;
  error: string = '';
  description: string = null;
  imageForView: string = null;
  imageFile: any = null;
  resourceFile: any = null;
  categories: any[] = [];
  subCategories: any[] = [];
  brandList: any[] = [];
  isReadOnly: boolean = false;

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    status: new FormControl(),
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

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private brandService: BrandsService) {

  }

  ngOnInit() {
    this.loadAllCategories();
    this.loadAllBrands();

    if (this.type === 'UPDATE') {
      this.description = this.productData.description;
      this.imageForView = 'url(' + GlobalProperties.RESOURCE_URL + this.productData.productImageUrl + ')';
      this.setProductData();
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
    if (file !== null)  {
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
  }

  createProduct() {
    if (this.resourceFile !== null) {
      this.productForm.patchValue({resourceFile: this.resourceFile});
    } else {
      this.productForm.patchValue({resourceFile: {}});
    }

    const requestBody = this.productForm.value;
    requestBody['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.productService.createUpdate(requestBody).subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.isSuccess = true;
        this.productForm.reset();
        this.imageForView = null;
        this.updateProductEmit.emit({status: 'UPDATED'});
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

  loadAllBrands() {
    this.brandService.loadAllB().subscribe(data => {
      this.brandList = data.responseItems;
    });
  }

  setProductData() {
    this.isReadOnly = true;
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      category: {
        id: this.productData.category.id
      }
    };
    this.categoryService.loadAllSubCategories(request).subscribe(data => {
      this.subCategories = data.responseItems;
    });

    this.productForm = new FormGroup({
      id: new FormControl(this.productData.id),
      status: new FormControl(this.productData.status),
      barcode: new FormControl(this.productData.barcode, [Validators.required]),
      productModel: new FormControl(this.productData.productModel),
      productName: new FormControl(this.productData.productName),
      brand: new FormGroup({
        id: new FormControl(this.productData.brand.id, [Validators.required])
      }),
      description: new FormControl(this.productData.description),
      productImageUrl: new FormControl(this.productData.productImageUrl),
      category: new FormGroup({
        id: new FormControl(this.productData.category.id, [Validators.required])
      }),
      subCategory: new FormGroup({
        id: new FormControl(this.productData.subCategory.id, [Validators.required])
      }),
      resourceFile: new FormGroup({
        fileName: new FormControl(),
        base64String: new FormControl(),
        fileExtention: new FormControl(),
        fileSize: new FormControl()
      }),
    });

    // this.productForm.get('brand').disable();
    // this.productForm.get('subCategory').disable();
    // this.productForm.get('barcode').disable();
    // this.productForm.get('category').disable();
    // this.productForm.get('productName').disable();
  }

}
