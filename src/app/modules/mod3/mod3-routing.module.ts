import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod3Component } from './mod3.component';
import { authGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: Mod3Component, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod3RoutingModule { }
