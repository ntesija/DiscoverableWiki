import { TestBed, inject } from '@angular/core/testing';

import { NavService } from './nav-service.service';

describe('NavServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavService]
    });
  });

  it('should be created', inject([NavService], (service: NavService) => {
    expect(service).toBeTruthy();
  }));
});
