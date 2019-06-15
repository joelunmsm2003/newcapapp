import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaPage } from './propuesta.page';

describe('PropuestaPage', () => {
  let component: PropuestaPage;
  let fixture: ComponentFixture<PropuestaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
