import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service/authentication.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const authenticationService = inject(AuthenticationService)

  return authenticationService.currentUser$.pipe(map((currentUser) => {
    console.log(currentUser)
    if(!currentUser){
      router.navigate(["login"])
      return false
    }
    return true
  }))

};
