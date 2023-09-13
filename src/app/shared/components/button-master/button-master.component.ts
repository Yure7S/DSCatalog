import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-master',
  templateUrl: './button-master.component.html',
  styleUrls: ['./button-master.component.css']
})
export class ButtonMasterComponent {
  @Input() value?: string
  @Input() arrow?: boolean
  @Input() url?: string
  @Input() isSubmit?: boolean

  constructor() {
    
  }
}
