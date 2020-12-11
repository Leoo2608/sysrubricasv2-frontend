import { TestBed } from '@angular/core/testing';

import { CursoProyectoService } from './curso-proyecto.service';

describe('CursoProyectoService', () => {
  let service: CursoProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
