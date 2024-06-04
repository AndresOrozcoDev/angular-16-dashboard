import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod2-routing.module';
import { Mod2Component } from './mod2.component';


@NgModule({
  declarations: [
    Mod2Component
  ],
  imports: [
    CommonModule,
    Mod2RoutingModule
  ]
})
export class Mod2Module { }
