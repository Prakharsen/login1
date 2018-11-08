import { TestBed, inject } from '@angular/core/testing';

import { RestCallingService } from './rest-calling.service';

describe('RestCallingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestCallingService]
    });
  });

  it('should be created', inject([RestCallingService], (service: RestCallingService) => {
    expect(service).toBeTruthy();
  }));
});
