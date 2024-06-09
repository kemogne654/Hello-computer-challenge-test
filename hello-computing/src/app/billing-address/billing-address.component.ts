import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BillingDataService } from '../billing-data.service';

@Component({
  selector: 'app-billing-address',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Include HttpClientModule here
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css'],
  providers: [BillingDataService],
})
export class BillingAddressComponent implements OnInit {
  pageSelectBillingAddress: any;
  organismBillingAddresses: any;

  constructor(private billingDataService: BillingDataService) {}

  ngOnInit(): void {
    this.billingDataService.getPageSelectBillingAddress().subscribe((data) => {
      this.pageSelectBillingAddress = data;
    });

    this.billingDataService.getOrganismBillingAddresses().subscribe((data) => {
      this.organismBillingAddresses = data.data; // Assuming the addresses are under the 'data' key
    });
  }

  selectAddress(addressId: number): void {
    console.log('Selected address ID:', addressId);
  }

  addNewAddress(): void {
    console.log('Add new address');
  }

  goBack(): void {
    console.log('Go back');
  }
}
