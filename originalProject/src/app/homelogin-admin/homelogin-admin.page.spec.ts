import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloginAdminPage } from './homelogin-admin.page';

describe('HomeloginAdminPage', () => {
  let component: HomeloginAdminPage;
  let fixture: ComponentFixture<HomeloginAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloginAdminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloginAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
