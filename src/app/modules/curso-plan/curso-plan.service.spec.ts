import { TestBed } from '@angular/core/testing';

import { CursoPlanService } from './curso-plan.service';

describe('CursoPlanService', () => {
  let service: CursoPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
