import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public loginHandler(data: object) {
    console.log("Recebendo evento")
    console.log(data)
  }
}
