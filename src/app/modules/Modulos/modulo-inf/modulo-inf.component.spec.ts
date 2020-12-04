import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInfComponent } from './modulo-inf.component';

describe('ModuloInfComponent', () => {
  let component: ModuloInfComponent;
  let fixture: ComponentFixture<ModuloInfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
