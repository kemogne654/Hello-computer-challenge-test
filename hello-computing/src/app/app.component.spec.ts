import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { BillingDataService } from './billing-data.service';

describe('BillingDataService', () => {
  let service: BillingDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BillingDataService],
    });
    service = TestBed.inject(BillingDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch pageSelectBillingAddress', () => {
    const dummyData = { title: 'Test Title' };
    service.getPageSelectBillingAddress().subscribe((data) => {
      expect(data.title).toBe('Test Title');
    });
    const req = httpMock.expectOne(service['pageSelectBillingAddressUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  it('should fetch organismBillingAddresses', () => {
    const dummyData = [{ label: 'Deloitte' }];
    service.getOrganismBillingAddresses().subscribe((data) => {
      expect(data.length).toBe(1);
      expect(data[0].label).toBe('Deloitte');
    });
    const req = httpMock.expectOne(service['organismBillingAddressesUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
