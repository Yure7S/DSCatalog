import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  /* 
    1 for default
    2 for submit
    3 to cancel
  */
  @Input() buttonType?: number
  @Input() value?: string
  @Input() url?: string
}
