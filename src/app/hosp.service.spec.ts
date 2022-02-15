import { TestBed } from '@angular/core/testing';

import { HospService } from './hosp.service';

describe('HospService', () => {
  let service: HospService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
