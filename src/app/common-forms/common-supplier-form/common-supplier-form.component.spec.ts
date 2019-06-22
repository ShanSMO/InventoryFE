import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSupplierFormComponent } from './common-supplier-form.component';

describe('CommonSupplierFormComponent', () => {
  let component: CommonSupplierFormComponent;
  let fixture: ComponentFixture<CommonSupplierFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSupplierFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSupplierFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
