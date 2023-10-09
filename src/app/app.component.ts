import { Component, inject } from '@angular/core';
import { UserService } from './core/services/user.service/user.service';
import { AuthenticationService } from './core/services/authentication.service/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  authenticationService = inject(AuthenticationService)

  ngOnInit(){
    this.authenticationService.SetCurrentUser()
  }
}
