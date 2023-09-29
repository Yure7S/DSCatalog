import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  let authenticationStatus = false

  if(authenticationStatus) return true

  router.navigate(["login"])
  return false
};
