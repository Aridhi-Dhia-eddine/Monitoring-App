import { TestBed } from '@angular/core/testing';

import { SiServiceService } from './si-service.service';

describe('SiServiceService', () => {
  let service: SiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
