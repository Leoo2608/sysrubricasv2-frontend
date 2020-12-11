import { TestBed } from '@angular/core/testing';

import { ExpertoExternoService } from './experto-externo.service';

describe('ExpertoExternoService', () => {
  let service: ExpertoExternoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertoExternoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
