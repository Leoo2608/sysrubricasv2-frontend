import { TestBed } from '@angular/core/testing';

import { InstrumentoEvaluacionService } from './instrumento-evaluacion.service';

describe('InstrumentoEvaluacionService', () => {
  let service: InstrumentoEvaluacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentoEvaluacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
