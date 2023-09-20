import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button02',
  templateUrl: './button02.component.html',
  styleUrls: ['./button02.component.css']
})
export class Button02Component {
  /* 
    1 for default
    2 for submit
    3 to cancel
  */
  @Input() buttonType?: number
  @Input() value?: string
  @Input() url?: string
}
