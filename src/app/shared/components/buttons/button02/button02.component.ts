import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button02',
  templateUrl: './button02.component.html',
  styleUrls: ['./button02.component.css']
})
export class Button02Component {
  @Input() value?: string
  @Input() classButton?: string
}
