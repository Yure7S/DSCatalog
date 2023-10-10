import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  authenticationService = inject(AuthenticationService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authenticationService.GetToken()
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    const clone = request.clone(options)
    return next.handle(clone);
  }
}
