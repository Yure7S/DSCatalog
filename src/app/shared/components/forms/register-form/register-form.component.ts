import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  @Output() submitData: EventEmitter<any> = new EventEmitter()

  registerForm!: FormGroup

  ngOnInit(){
    this.createForm()
  }
  
  private createForm() {

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required])
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
