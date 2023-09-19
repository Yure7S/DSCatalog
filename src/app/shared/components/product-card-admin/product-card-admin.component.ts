import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-admin',
  templateUrl: './product-card-admin.component.html',
  styleUrls: ['./product-card-admin.component.css']
})
export class ProductCardAdminComponent {
  @Input() title?: string
  @Input() price?: string
  @Input() description?: string
}
