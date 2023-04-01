import { TestBed } from '@angular/core/testing';

import { ServeurServiceService } from './serveur-service.service';

describe('ServeurServiceService', () => {
  let service: ServeurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
