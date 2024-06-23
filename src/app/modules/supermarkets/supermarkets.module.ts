import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsComponent } from './supermarkets.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupermarketsComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    SupermarketsRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class SupermarketsModule { }
