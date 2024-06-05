import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotifyComponent } from './components/notify/notify.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
    NotifyComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
    NotifyComponent
  ]
})
export class SharedModule { }
