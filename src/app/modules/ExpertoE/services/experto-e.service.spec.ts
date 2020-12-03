import { TestBed } from '@angular/core/testing';

import { ExpertoEService } from './experto-e.service';

describe('ExpertoEService', () => {
  let service: ExpertoEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertoEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
