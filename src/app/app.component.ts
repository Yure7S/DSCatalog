import { Component, inject } from '@angular/core';
import { CurrentUserServiceService } from './shared/services/current-user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser = inject(CurrentUserServiceService)

  ngOnInit(){
    this.currentUser.setCurrentUser()
  }
}
