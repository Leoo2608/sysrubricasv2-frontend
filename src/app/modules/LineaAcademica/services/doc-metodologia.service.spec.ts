import { TestBed } from '@angular/core/testing';

import { DocMetodologiaService } from './doc-metodologia.service';

describe('DocMetodologiaService', () => {
  let service: DocMetodologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocMetodologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
