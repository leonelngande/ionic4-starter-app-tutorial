import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemPage } from './view-item.page';

describe('ViewItemPage', () => {
  let component: ViewItemPage;
  let fixture: ComponentFixture<ViewItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
