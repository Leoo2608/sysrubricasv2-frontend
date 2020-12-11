import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoexternoComponent } from './expertoexterno.component';

describe('ExpertoexternoComponent', () => {
  let component: ExpertoexternoComponent;
  let fixture: ComponentFixture<ExpertoexternoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertoexternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertoexternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
