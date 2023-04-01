import { TestBed } from '@angular/core/testing';

import { MotServiceService } from './mot-service.service';

describe('MotServiceService', () => {
  let service: MotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
