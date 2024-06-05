import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BillingDataService } from './billing-data.service';

describe('BillingDataService', () => {
  let service: BillingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillingDataService],
    });
    service = TestBed.inject(BillingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
