import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-form',
  templateUrl: './recover-form.component.html',
  styleUrls: ['./recover-form.component.css']
})
export class RecoverFormComponent {
  @Output() submitData: EventEmitter<any> = new EventEmitter()

  recoverForm!: FormGroup

  ngOnInit(){
    this.createForm()
  }
  
  private createForm() {
    this.recoverForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      repeatEmail: new FormControl('', [Validators.required, Validators.email])
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
