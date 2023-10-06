import { Component, inject } from '@angular/core';
import { Login } from 'src/app/core/models/auth.models/login';
import { AuthenticationService } from 'src/app/core/services/authentication.service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authenticationService = inject(AuthenticationService)
  
  public loginHandler(data: Login) { 
    this.authenticationService.Login(data)
  }
}
