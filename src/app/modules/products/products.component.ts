import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Product } from './models/products';
import { ProductsService } from './services/products.service';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: Array<Product> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor( private productsService: ProductsService, private notifyService: NotifyService) {
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

}
