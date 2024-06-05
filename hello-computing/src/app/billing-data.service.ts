import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillingDataService {
  private pageSelectBillingAddressUrl =
    'https://raw.githubusercontent.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json';
  private organismBillingAddressesUrl =
    'https://raw.githubusercontent.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json';

  constructor(private http: HttpClient) {}

  getPageSelectBillingAddress(): Observable<any> {
    return this.http.get(this.pageSelectBillingAddressUrl);
  }

  getOrganismBillingAddresses(): Observable<any> {
    return this.http.get(this.organismBillingAddressesUrl);
  }
}
