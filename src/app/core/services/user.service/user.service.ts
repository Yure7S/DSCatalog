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

  options = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.currentUserService.currentUser$.value?.token}`,
    })
  }
 
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`/v1/users`, this.options);
  }

  getById(id: string): Observable<User[]> {
    return this.http.get<User[]>(`/v1/users${id}`, this.options);
  }
 
  update(user: User, id: string): Observable<User[]> {
    return this.http.put<User[]>(`/v1/users${id}`, user, this.options);
  }

  create(user: User): Observable<User[]> {
    return this.http.post<User[]>(`/v1/users`, user, this.options);
  }

  delete(id: string): Observable<User[]> {
    return this.http.delete<User[]>(`/v1/users${id}`, this.options);
  }
}
