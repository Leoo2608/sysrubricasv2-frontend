import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocmetodologiaComponent } from './docmetodologia.component';

describe('DocmetodologiaComponent', () => {
  let component: DocmetodologiaComponent;
  let fixture: ComponentFixture<DocmetodologiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocmetodologiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocmetodologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
