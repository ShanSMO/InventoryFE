import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCustomerFormComponent } from './common-customer-form.component';

describe('CommonCustomerFormComponent', () => {
  let component: CommonCustomerFormComponent;
  let fixture: ComponentFixture<CommonCustomerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCustomerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
