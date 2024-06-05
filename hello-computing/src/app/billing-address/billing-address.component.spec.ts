import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BillingAddressComponent } from './billing-address.component';
import { BillingDataService } from '../billing-data.service';

describe('BillingAddressComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, BillingAddressComponent],
      providers: [BillingDataService],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BillingAddressComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
