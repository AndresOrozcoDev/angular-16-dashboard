import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'products', pathMatch: 'full', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [authGuard] },
  { path: 'users', pathMatch: 'full', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule), canActivate: [authGuard] },
  { path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule), canActivate: [authGuard] },
  { path: 'supermarkets', loadChildren: () => import('./modules/supermarkets/supermarkets.module').then(m => m.SupermarketsModule), canActivate: [authGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
