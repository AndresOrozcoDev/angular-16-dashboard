import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod1RoutingModule } from './mod1-routing.module';
import { Mod1Component } from './mod1.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Mod1Component
  ],
  imports: [
    CommonModule,
    Mod1RoutingModule,
    SharedModule
  ]
})
export class Mod1Module { }
