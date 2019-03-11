import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListPage } from './edit-list.page';

describe('EditListPage', () => {
  let component: EditListPage;
  let fixture: ComponentFixture<EditListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
