import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { loggedUser } from 'src/app/core/models/auth.models/loggedUser';


@Injectable({
  providedIn: 'root'
})
export class CurrentUserServiceService {

  currentUser$ = new BehaviorSubject<loggedUser | undefined | null>(undefined)
  constructor() { }

  public setCurrentUser() {
    if(localStorage.getItem('token')){
        this.currentUser$.next({
            id: 2,
            token: localStorage.getItem("token"),
            email: "maria@gmail.com", 
            username: "Maria",
            roles: [
              "ROLE_OPERATOR",
              "ROLE_ADMIN"
            ]
          }
        )
    } else{
      this.currentUser$.next(null)
    }
  }
}
