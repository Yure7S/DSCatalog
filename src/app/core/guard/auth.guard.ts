import { inject } from '@angular/core';
import { CanActivateFn, Route, Router } from '@angular/router';
import { map } from 'rxjs';
import { CurrentUserServiceService } from 'src/app/shared/services/current-user-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const currentUserService = inject(CurrentUserServiceService)

  return currentUserService.currentUser$.pipe(map((currentUser) => {
    if(!currentUser){
      router.navigate(["login"])
      return false
    }
    return true
  }))

};
