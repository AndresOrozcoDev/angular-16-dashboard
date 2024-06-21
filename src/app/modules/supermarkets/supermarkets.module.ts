import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsComponent } from './supermarkets.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SupermarketsComponent
  ],
  imports: [
    CommonModule,
    SupermarketsRoutingModule,
    HttpClientModule
  ]
})
export class SupermarketsModule { }
