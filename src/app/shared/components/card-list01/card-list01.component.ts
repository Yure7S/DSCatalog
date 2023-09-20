import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-list01',
  templateUrl: './card-list01.component.html',
  styleUrls: ['./card-list01.component.css']
})
export class CardList01Component {
  @Input() value?: string
}
