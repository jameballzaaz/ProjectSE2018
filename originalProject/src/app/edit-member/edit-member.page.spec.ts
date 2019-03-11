import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMemberPage } from './edit-member.page';

describe('EditMemberPage', () => {
  let component: EditMemberPage;
  let fixture: ComponentFixture<EditMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
