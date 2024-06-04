import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mod1', loadChildren: () => import('./modules/mod1/mod1.module').then(m => m.Mod1Module) }, 
  { path: 'mod2', loadChildren: () => import('./modules/mod2/mod2.module').then(m => m.Mod2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
