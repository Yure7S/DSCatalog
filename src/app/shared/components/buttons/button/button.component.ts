import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() isCancelButton?: boolean
  @Input() isSubmit?: boolean
  @Input() value?: string
  @Input() url?: string
}
