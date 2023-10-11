import { Injectable, inject } from '@angular/core';
import { Login } from '../../models/auth.models/login';
import { HttpClient } from '@angular/common/http';
import { loggedUser } from '../../models/auth.models/loggedUser';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  http = inject(HttpClient)
  router = inject(Router)

  currentUser$ = new BehaviorSubject<loggedUser | undefined>(undefined)

  public GetToken() {
    return this.currentUser$.value?.token
  }
  
  public Login(loginFormData: Login) {
    this.http.post<loggedUser>(`/v1/auth/signin`, loginFormData).subscribe(e => {
      this.router.navigate(["/"])
      
      const user: loggedUser = new loggedUser(
        e.id,
        e.token,
        e.type,
        e.username,
        e.email,
        e.roles
      )
      
      localStorage.setItem('currentUser', btoa(JSON.stringify(user)))
      this.currentUser$.next(user) 
    });
  }

  public Logout() {
    localStorage.removeItem("currentUser")
    this.currentUser$.next(undefined)
    this.router.navigate(["/"])
  }

  public SetCurrentUser() {
    if(localStorage.getItem('currentUser')){
      const currentUser = JSON.parse(atob(localStorage.getItem('currentUser')!))
      this.currentUser$.next(currentUser)
    } else{
      this.currentUser$.next(undefined)
    }
  }
}
