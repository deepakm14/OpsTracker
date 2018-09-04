import { TestBed, inject } from '@angular/core/testing';

import { PropertyfileService } from './propertyfile.service';

describe('PropertyfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyfileService]
    });
  });

  it('should be created', inject([PropertyfileService], (service: PropertyfileService) => {
    expect(service).toBeTruthy();
  }));
});
