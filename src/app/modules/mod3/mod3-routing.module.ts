import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod3Component } from './mod3.component';

const routes: Routes = [{ path: '', component: Mod3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod3RoutingModule { }
