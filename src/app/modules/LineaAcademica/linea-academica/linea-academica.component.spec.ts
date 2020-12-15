import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LineaAcademicaComponent } from './linea-academica.component';

describe('LineaAcademicaComponent', () => {
  let component: LineaAcademicaComponent;
  let fixture: ComponentFixture<LineaAcademicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LineaAcademicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
