import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { CategoriesService } from '../../services/categories.service';

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

  constructor(private notifyService: NotifyService, private categoriesServices: CategoriesService) { }

  createCategory() {    
    if(this.createCategoryForm.valid) {
      const categoryName = this.createCategoryForm.value.category ?? 'defaultCategoryName';
      this.categoriesServices.postCategories(categoryName).subscribe( (resp) => {
        this.notifyService.notify('Category created.', 'success');
        this.refresh.emit(true);
      },
      (error) => {
        this.notifyService.notify('Failed to create category.', 'error');
      })
    } else {
      this.notifyService.notify('Incorrect data.', 'error');
    }
  }
}
