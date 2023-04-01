import { TestBed } from '@angular/core/testing';

import { ServiceResponsableService } from './service-responsable.service';

describe('ServiceResponsableService', () => {
  let service: ServiceResponsableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceResponsableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
