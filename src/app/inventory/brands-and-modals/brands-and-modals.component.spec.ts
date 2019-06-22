import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAndModalsComponent } from './brands-and-modals.component';

describe('BrandsAndModalsComponent', () => {
  let component: BrandsAndModalsComponent;
  let fixture: ComponentFixture<BrandsAndModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandsAndModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandsAndModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
