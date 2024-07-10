import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CategoriesService } from '../../services/categories.service';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  createCategoryForm = new FormGroup({
    category: new FormControl('', [Validators.required]),
  });
  @Output() refresh: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private notifyService: NotifyService, 
    private categoriesServices: CategoriesService) { }

  createCategory() {    
    if(this.createCategoryForm.valid) {
      const categoryName = this.createCategoryForm.value.category ?? 'defaultCategoryName';
      this.categoriesServices.postCategories(categoryName).subscribe( (resp) => {
        this.notifyService.notify(resp.message, 'success');
        this.refresh.emit(true);
        this.createCategoryForm.reset();
      },
      (error) => {
        this.notifyService.notify(error.message, 'error');
      })
    } else {
      this.notifyService.notify('Incorrect data.', 'error');
    }
  }
}
