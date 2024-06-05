// src/app/billing-address/billing-address.component.ts
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class BillingAddressComponent {
  @Input() addresses: { billingAddresses: any[] } = { billingAddresses: [] };

  selectAddress(address: any) {
    this.addresses.billingAddresses.forEach((a: any) => (a.selected = false));
    address.selected = true;
  }
}
