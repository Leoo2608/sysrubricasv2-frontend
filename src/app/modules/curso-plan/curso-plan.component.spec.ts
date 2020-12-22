import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPlanComponent } from './curso-plan.component';

describe('CursoPlanComponent', () => {
  let component: CursoPlanComponent;
  let fixture: ComponentFixture<CursoPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
