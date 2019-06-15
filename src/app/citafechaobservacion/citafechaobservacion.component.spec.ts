import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitafechaobservacionComponent } from './citafechaobservacion.component';

describe('CitafechaobservacionComponent', () => {
  let component: CitafechaobservacionComponent;
  let fixture: ComponentFixture<CitafechaobservacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitafechaobservacionComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitafechaobservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
