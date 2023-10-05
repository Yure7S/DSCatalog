import { Component, inject } from '@angular/core';
import { UserService } from './core/services/user.service/user.service';
import { CurrentUserServiceService } from './shared/services/current-user.service/current-user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUserService = inject(CurrentUserServiceService)
  userService = inject(UserService)

  ngOnInit(){
    this.currentUserService.setCurrentUser()
    console.log(this.currentUserService.currentUser$.value?.token)
    this.userService.getAll().subscribe(e => console.log(e))
  }
}
