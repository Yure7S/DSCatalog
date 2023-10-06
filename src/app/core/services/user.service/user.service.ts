import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user.models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CurrentUserServiceService } from 'src/app/shared/services/current-user.service/current-user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  http = inject(HttpClient)
  currentUserService = inject(CurrentUserServiceService)
  api: string = environment.apiUrl

  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJyb2xlcyI6WyJST0xFX09QRVJBVE9SIiwiUk9MRV9BRE1JTiJdLCJpc3MiOiJjb20uZHNjYXRhbG9nIiwiaWQiOjIsImV4cCI6MTY5NjYxNzc4NH0.ajpZEz6cllacXkHrDHAYczv6MPlfEJ4FOkh_7Yt9dFg`,
    })
  }
 
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/v1/users`, this.options);
  }

  getById(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users/${id}`);
  }
 
  update(user: User, id: string): Observable<User[]> {
    return this.http.put<User[]>(`${this.api}/users/${id}`, user);
  }

  create(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.api}/users`, user);
  }

  delete(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`${this.api}/users/${id}`);
  }
}
