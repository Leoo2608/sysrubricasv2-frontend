import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentoEvaluacionComponent } from './instrumento-evaluacion.component';

describe('InstrumentoEvaluacionComponent', () => {
  let component: InstrumentoEvaluacionComponent;
  let fixture: ComponentFixture<InstrumentoEvaluacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentoEvaluacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentoEvaluacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
