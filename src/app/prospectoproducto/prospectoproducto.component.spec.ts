import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectoproductoComponent } from './prospectoproducto.component';

describe('ProspectoproductoComponent', () => {
  let component: ProspectoproductoComponent;
  let fixture: ComponentFixture<ProspectoproductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectoproductoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
