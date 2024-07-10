import { Component, ViewChild } from '@angular/core';

import { Product } from './models/products';
import { Category } from '../categories/models/categories';
import { ProductsService } from './services/products.service';
import { Supermarket } from '../supermarkets/models/supermarkets';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

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
    private notifyService: NotifyService
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

  remove(productID?: number) {
    this.productsService.deleteProduct(productID).subscribe( (resp) => {
      this.refresh();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
