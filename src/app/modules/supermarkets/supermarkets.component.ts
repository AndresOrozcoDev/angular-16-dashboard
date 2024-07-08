import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Supermarket } from './models/supermarkets';
import { NotifyService } from 'src/app/shared/services/notify.service';
import { SupermarketsService } from './services/supermarkets.service';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.scss']
})
export class SupermarketsComponent {

  supermarkets: Array<Supermarket> = [];
  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor( 
    private supermarketsService: SupermarketsService, 
    private notifyService: NotifyService,
    ) {
    this.getSupermarkets();
  }

  openmodal() {
    this.modalComponent.openModal();
  }

  getSupermarkets() {
    this.supermarketsService.getSupermarkets().subscribe( (resp) => {
      this.supermarkets = resp.data;
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

  refresh() {
    this.getSupermarkets();
    this.modalComponent.closeModal();
  }

  remove(SupermarketID?: number) {
    this.supermarketsService.deleteSupermarket(SupermarketID).subscribe( (resp) => {
      this.refresh();
      this.notifyService.notify(resp.message, 'success');
    }, (error) => {
      this.notifyService.notify(error.message, 'error');
      console.error(error);
    })
  }

}
