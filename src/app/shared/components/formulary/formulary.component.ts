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
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    });

    this.recoverForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      repeatEmail: new FormControl('', [Validators.required])
    });
  }

  public onSubmit(value: object) {
    console.log(value)
  }
}
