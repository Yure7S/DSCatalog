import { Injectable, inject } from '@angular/core';
import { Login } from '../../models/auth.models/login';
import { UserService } from '../user.service/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentUserServiceService } from 'src/app/shared/services/current-user.service/current-user-service.service';
import { loggedUser } from '../../models/auth.models/loggedUser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  http = inject(HttpClient)
  token$ = new BehaviorSubject<string | undefined>(undefined)
  currentUser$ = new BehaviorSubject<loggedUser | undefined>(undefined)
  
  public Login(loginFormData: Login) {
    this.http.post<loggedUser>(`/v1/auth/signin`, loginFormData).subscribe(e => {
      console.log(e)
      localStorage.setItem('token', e.token)
      this.token$.next(e.token)
    });
  }

  public Logout() {
    
  }
}
