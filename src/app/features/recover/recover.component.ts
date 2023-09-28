import { Component } from '@angular/core';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent {

  public loginHandler(data: object) {
    console.log("Recebendo evento")
    console.log(data)
  }
}
