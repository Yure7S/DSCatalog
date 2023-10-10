import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user.models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthenticationService } from '../authentication.service/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  http = inject(HttpClient)
  authenticationService = inject(AuthenticationService)
 
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/v1/users`);
  }

  getById(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/v1/users${id}`);
  }
 
  update(user: User, id: string): Observable<User[]> {
    return this.http.put<User[]>(`/v1/users${id}`, user);
  }

  create(user: User): Observable<User[]> {
    return this.http.post<User[]>(`/v1/users`, user);
  }

  delete(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`/v1/users${id}`);
  }
}
