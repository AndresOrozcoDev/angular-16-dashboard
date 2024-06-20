import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/services/notify.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    unit: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    supermarket: new FormControl('', [Validators.required]),
  });

  constructor(private notifyService: NotifyService) { }

  createProduct() {    
    if(this.createProductForm.valid) {
      this.notifyService.notify('Product created.', 'success');
      console.log(this.createProductForm.value);      
    } else {
      this.notifyService.notify('Incorrect data.', 'error');
    }
  }

}
