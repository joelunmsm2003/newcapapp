import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucitasComponent } from './menucitas.component';

describe('MenucitasComponent', () => {
  let component: MenucitasComponent;
  let fixture: ComponentFixture<MenucitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenucitasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenucitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
