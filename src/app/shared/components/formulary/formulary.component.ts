import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent {
  @Input() formType?: number

  loginForm!: FormGroup
  registerForm!: FormGroup
  recoverForm!: FormGroup

  ngOnInit(){
    this.createForm()
  }
  
  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required])
    });

    this.recoverForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      repeatEmail: new FormControl('', [Validators.required, Validators.email])
    });
  }

  public onSubmit(form: FormGroup, value: object) {

    if(!form.valid){
      console.log("O formulário não é válido")
      return
    }
    
    console.log(value)
  }
}
