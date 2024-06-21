import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketsComponent } from './supermarkets.component';

const routes: Routes = [{ path: '', component: SupermarketsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupermarketsRoutingModule { }
