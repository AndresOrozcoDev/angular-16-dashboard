import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/modules/categories/models/categories';
import { CategoriesService } from 'src/app/modules/categories/services/categories.service';
import { Supermarket } from 'src/app/modules/supermarkets/models/supermarkets';
import { SupermarketsService } from 'src/app/modules/supermarkets/services/supermarkets.service';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  categories: Array<Category> = [];
  supermarkets: Array<Supermarket> = [];
  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    supermarket: new FormControl('', [Validators.required]),
  });

  constructor(private notifyService: NotifyService,
    private categoriesService: CategoriesService,
    private supermarketsService: SupermarketsService ) {
    this.getCategories();
    this.getSupermarkets();
   }

  createProduct() {    
    if(this.createProductForm.valid) {
      this.notifyService.notify('Product created.', 'success');
      console.log(this.createProductForm.value);      
    } else {
      this.notifyService.notify('Incorrect data.', 'error');
    }
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe( (resp) => {
      this.categories = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  getSupermarkets() {
    this.supermarketsService.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
