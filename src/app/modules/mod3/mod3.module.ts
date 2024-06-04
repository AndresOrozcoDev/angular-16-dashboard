import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod3RoutingModule } from './mod3-routing.module';
import { Mod3Component } from './mod3.component';


@NgModule({
  declarations: [
    Mod3Component
  ],
  imports: [
    CommonModule,
    Mod3RoutingModule
  ]
})
export class Mod3Module { }
