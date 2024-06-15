import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod2Component } from './mod2.component';
import { authGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: Mod2Component, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod2RoutingModule { }
