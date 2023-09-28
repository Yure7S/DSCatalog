import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Output() submitData: EventEmitter<any> = new EventEmitter()

  loginForm!: FormGroup

  ngOnInit(){
    this.createForm()
  }
  
  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(form: FormGroup, value: object) {

    if(form.invalid){
      console.log("O formulário não é válido")
      return
    }
    this.submitData.emit(value)
  }
}
