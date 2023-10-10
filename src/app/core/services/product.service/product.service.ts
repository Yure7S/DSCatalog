import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../../models/product.models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  http = inject(HttpClient)
  api: string = environment.apiUrl
 
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/v1/products`);
  }

  getById(id: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.api}/products/${id}`);
  }
 
  update(user: Product, id: string): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.api}/products/${id}`, user);
  }

  create(user: Product): Observable<Product[]> {
    return this.http.post<Product[]>(`${this.api}/products`, user);
  }

  delete(id: string): Observable<Product[]> {
    return this.http.delete<Product[]>(`${this.api}/products/${id}`);
  }
}
