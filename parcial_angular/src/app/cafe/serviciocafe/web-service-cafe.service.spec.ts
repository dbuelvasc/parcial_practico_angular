import { TestBed } from '@angular/core/testing';

import { WebServiceCafeService } from './web-service-cafe.service';

describe('WebServiceCafeService', () => {
  let service: WebServiceCafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServiceCafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
