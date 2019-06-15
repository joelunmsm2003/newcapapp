import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoPage } from './prospecto.page';

describe('ProspectoPage', () => {
  let component: ProspectoPage;
  let fixture: ComponentFixture<ProspectoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
