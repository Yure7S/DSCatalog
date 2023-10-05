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
      'content-type': 'application/json',
      'Authorization': `Bearer ${this.currentUserService.currentUser$.value?.token}`,
      'Access-Control-Allow-Origin': '*'
    })
  }
 
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.api}/users`, this.options);
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
