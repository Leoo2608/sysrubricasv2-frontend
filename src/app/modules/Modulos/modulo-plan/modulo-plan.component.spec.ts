import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPlanComponent } from './modulo-plan.component';

describe('ModuloPlanComponent', () => {
  let component: ModuloPlanComponent;
  let fixture: ComponentFixture<ModuloPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
