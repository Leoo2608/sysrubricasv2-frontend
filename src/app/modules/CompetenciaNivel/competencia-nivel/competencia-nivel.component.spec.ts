import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaNivelComponent } from './competencia-nivel.component';

describe('CompetenciaNivelComponent', () => {
  let component: CompetenciaNivelComponent;
  let fixture: ComponentFixture<CompetenciaNivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciaNivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
