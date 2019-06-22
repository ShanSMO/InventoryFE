import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCategoryFormComponent } from './common-category-form.component';

describe('CommonCategoryFormComponent', () => {
  let component: CommonCategoryFormComponent;
  let fixture: ComponentFixture<CommonCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
