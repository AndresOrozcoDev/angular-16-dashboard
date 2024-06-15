import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mod1Component } from './mod1.component';
import { authGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: Mod1Component, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1RoutingModule { }
