import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotifyComponent } from './components/notify/notify.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent,
    LoadingComponent,
    NotifyComponent,
    SidebarComponent,
    CurrencyFormatPipe,
    CurrencyFormatterDirective
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
    SidebarComponent,
    CurrencyFormatPipe,
  ],
  providers: [ CurrencyPipe, DecimalPipe ]
})
export class SharedModule { }
