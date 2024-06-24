import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/modules/categories/models/categories';
import { CategoriesService } from 'src/app/modules/categories/services/categories.service';
import { Supermarket } from 'src/app/modules/supermarkets/models/supermarkets';
import { SupermarketsService } from 'src/app/modules/supermarkets/services/supermarkets.service';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  products: Array<Product> = [];
  categories: Array<Category> = [];
  supermarkets: Array<Supermarket> = [];
  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    created: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
    supermarket_id: new FormControl('', [Validators.required]),
  });
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private notifyService: NotifyService,
    private categoriesService: CategoriesService,
    private supermarketsService: SupermarketsService,
    private productsServices: ProductsService) {
    this.getProducts();
    this.getCategories();
    this.getSupermarkets();
  }

  getProducts() {
    this.productsServices.getProducts().subscribe((resp) => {
      this.products = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  createProduct() {
    // debugger
    // if (this.createProductForm.valid) {
      const ProductDefault = {
        name: this.createProductForm.value.name || '',
        price: Number(this.createProductForm.value.price) || 0,
        value: Number(this.createProductForm.value.value) || 0,
        unit: this.createProductForm.value.unit || '',
        created: this.createProductForm.value.created || '',
        category_id: Number(this.createProductForm.value.category_id) || 0,
        supermarket_id: Number(this.createProductForm.value.supermarket_id) || 0
      };
      console.log(ProductDefault);
      
      this.productsServices.postProduct(ProductDefault).subscribe(
        (resp) => {
          this.notifyService.notify('Product created.', 'success');
          this.refresh.emit(true);
        },
        (error) => {
          this.notifyService.notify('Failed to create product.', 'error');
        }
      );
    // } else {
    //   this.notifyService.notify('Incorrect data.', 'error');
    // }
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((resp) => {
      this.categories = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  getSupermarkets() {
    this.supermarketsService.getSupermarkets().subscribe((resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
