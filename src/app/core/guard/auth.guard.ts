import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { CurrentUserServiceService } from 'src/app/shared/services/current-user-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const currentUser = inject(CurrentUserServiceService)

  if(currentUser != null) return true

  router.navigate(["login"])
  return false
};
