import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/core/models/user';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserServiceService {

  currentUser$ = new BehaviorSubject<User | undefined | null>(undefined)

  constructor() { }

  public setCurrentUser() {
    if(localStorage.getItem('token')){
      this.currentUser$.next({
        email: "maria@gmail.com", 
        id: 2,
        username: "Maria",
        roles: [
          "ROLE_OPERATOR",
          "ROLE_ADMIN"
        ]
      })
    } else{
      this.currentUser$.next(null)
    }
  }
}
