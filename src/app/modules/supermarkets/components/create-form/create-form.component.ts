import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { SupermarketsService } from '../../services/supermarkets.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent {

  createSupermarketForm = new FormGroup({
    supermarket: new FormControl('', [Validators.required]),
  });

  constructor(private notifyService: NotifyService, private supermarketsService: SupermarketsService) { }

  createSupermarket() {    
    if(this.createSupermarketForm.valid) {
      const supermarketName = this.createSupermarketForm.value.supermarket ?? 'defaultSupermarketName';
      this.supermarketsService.postSupermarket(supermarketName).subscribe( (resp) => {
        this.notifyService.notify('Supermarket created.', 'success');
      },
      (error) => {
        this.notifyService.notify('Failed to create supermarket.', 'error');
      })
    } else {
      this.notifyService.notify('Incorrect data.', 'error');
    }
  }

}
