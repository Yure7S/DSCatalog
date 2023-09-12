import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent {
  @Input() formType?: number
}
