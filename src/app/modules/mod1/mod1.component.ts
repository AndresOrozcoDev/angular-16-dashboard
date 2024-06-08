import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.scss']
})
export class Mod1Component {

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  openmodal() {
    this.modalComponent.openModal();
  }

}
