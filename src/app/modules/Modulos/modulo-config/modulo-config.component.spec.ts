import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloConfigComponent } from './modulo-config.component';

describe('ModuloConfigComponent', () => {
  let component: ModuloConfigComponent;
  let fixture: ComponentFixture<ModuloConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
