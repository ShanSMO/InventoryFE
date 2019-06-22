import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderLayoutComponent } from './purchase-order-layout.component';

describe('PurchaseOrderLayoutComponent', () => {
  let component: PurchaseOrderLayoutComponent;
  let fixture: ComponentFixture<PurchaseOrderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseOrderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
