import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonProductFormComponent } from './common-product-form.component';

describe('CommonProductFormComponent', () => {
  let component: CommonProductFormComponent;
  let fixture: ComponentFixture<CommonProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
