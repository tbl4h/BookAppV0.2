import { TestBed } from '@angular/core/testing';

import { ForkService } from './fork.service';

describe('ForkService', () => {
  let service: ForkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
