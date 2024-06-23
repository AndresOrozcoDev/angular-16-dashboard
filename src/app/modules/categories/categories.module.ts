import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CategoriesModule { }
