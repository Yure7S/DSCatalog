import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  http = inject(HttpClient)

  getAll(): Observable<User[]> {
    return this.http.get<User[]>("testando");
  }

  getById(): Observable<User[]> {
    return this.http.get<User[]>("testando");
  }
 
  update(): Observable<User[]> {
    return this.http.get<User[]>("testando");
  }

  create(): Observable<User[]> {
    return this.http.get<User[]>("testando");
  }

  delete(): Observable<User[]> {
    return this.http.get<User[]>("testando");
  }
}
