import { TestBed } from '@angular/core/testing';

import { CommonflagsService } from './commonflags.service';

describe('CommonflagsService', () => {
  let service: CommonflagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonflagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
