import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent {
  @Input() formType?: number

  profileForm!: FormGroup

  ngOnInit(){
    this.createForm()
  }
  
  public createForm() {
    this.profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  public onSubmit() {
    console.log(this.profileForm.value)
  }
}
