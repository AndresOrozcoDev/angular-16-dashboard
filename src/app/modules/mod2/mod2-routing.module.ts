import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod2Component } from './mod2.component';

const routes: Routes = [{ path: '', component: Mod2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod2RoutingModule { }
