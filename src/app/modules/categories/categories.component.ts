import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { CategoriesService } from './services/categories.service';
import { Category } from './models/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: Array<Category> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor( 
    private categoriesService: CategoriesService, 
    private notifyService: NotifyService,
    ) {
    this.getCategories();
  }

  openmodal() {
    this.modalComponent.openModal();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe( (resp) => {
      this.categories = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  refresh() {
    this.getCategories();
    this.modalComponent.closeModal();
  }

  remove(categoryID?: number) {
    this.categoriesService.deleteCategory(categoryID).subscribe( (resp) => {
      this.refresh();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
