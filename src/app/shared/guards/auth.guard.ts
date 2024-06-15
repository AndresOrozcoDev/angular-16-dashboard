import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return checkUserSession();
};

const checkUserSession = (): boolean | UrlTree => {
  const userSession = localStorage.getItem('user');

  if (userSession) {
    return true;
  } else {
    return inject(Router).createUrlTree(['/']);
  }
}
