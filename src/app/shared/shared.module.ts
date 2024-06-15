import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotifyComponent } from './components/notify/notify.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
    NotifyComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], 
  exports: [
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
    NotifyComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
