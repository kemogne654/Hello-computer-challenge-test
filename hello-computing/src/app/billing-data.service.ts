import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BillingDataService {
  private pageSelectBillingAddressUrl =
    'https://rawgit.com/rohit-dantas-conichi/3cf7d1da56f60959adfc4664cff31189/raw/e97db2ad3940dce2a7da1ececcc1375b1f46311d/page-select_billing_address-en.json';
  private organismBillingAddressesUrl =
    'https://rawgit.com/rohit-dantas-conichi/48635f6c8eead55a4b16e8670a813ac5/raw/eefc1c5180234519816df4d7293892fb92bab0e0/organism-billing_addresses-en.json';

  constructor(private http: HttpClient) {}

  getPageSelectBillingAddress(): Observable<any> {
    return this.http
      .get(this.pageSelectBillingAddressUrl)
      .pipe(catchError(this.handleError));
  }

  getOrganismBillingAddresses(): Observable<any> {
    return this.http
      .get(this.organismBillingAddressesUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
