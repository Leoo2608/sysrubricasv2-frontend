import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAcademicoComponent } from './plan-academico.component';

describe('PlanAcademicoComponent', () => {
  let component: PlanAcademicoComponent;
  let fixture: ComponentFixture<PlanAcademicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAcademicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
