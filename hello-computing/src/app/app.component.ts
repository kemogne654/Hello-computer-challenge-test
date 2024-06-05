import { Component } from '@angular/core';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BillingAddressComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-computing';
}
