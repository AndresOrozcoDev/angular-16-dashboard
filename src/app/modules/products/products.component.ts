import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Product } from './models/products';
import { ProductsService } from './services/products.service';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { CategoriesService } from '../categories/services/categories.service';
import { SupermarketsService } from '../supermarkets/services/supermarkets.service';
import { Category } from '../categories/models/categories';
import { Supermarket } from '../supermarkets/models/supermarkets';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Array<Product> = [];
  categories: Array<Category> = [];
  supermarkets: Array<Supermarket> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor( 
    private productsService: ProductsService, 
    private notifyService: NotifyService,
    private categoriesService: CategoriesService,
    private supermarketsService: SupermarketsService
    ) {
    this.getProducts();
  }

  openmodal() {
    this.modalComponent.openModal();
  }

  getProducts() {
    this.productsService.getProducts().subscribe( (resp) => {
      this.products = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  refresh() {
    this.getProducts();
    this.modalComponent.closeModal();
  }

}
