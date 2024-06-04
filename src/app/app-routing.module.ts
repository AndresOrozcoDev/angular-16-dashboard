import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mod1', loadChildren: () => import('./modules/mod1/mod1.module').then(m => m.Mod1Module) }, 
  { path: 'mod2', loadChildren: () => import('./modules/mod2/mod2.module').then(m => m.Mod2Module) },
  { path: 'mod3', loadChildren: () => import('./modules/mod3/mod3.module').then(m => m.Mod3Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
