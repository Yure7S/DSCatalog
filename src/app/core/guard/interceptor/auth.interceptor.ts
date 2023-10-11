import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}
  authenticationService = inject(AuthenticationService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authenticationService.GetToken()
    console.log(request.url)
    if(token){
      const options = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      }
      const clone = request.clone(options)
      return next.handle(clone)
    }

    return next.handle(request);
  }
}
