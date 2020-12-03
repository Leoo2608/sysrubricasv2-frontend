import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoEComponent } from './experto-e.component';

describe('ExpertoEComponent', () => {
  let component: ExpertoEComponent;
  let fixture: ComponentFixture<ExpertoEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertoEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertoEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
