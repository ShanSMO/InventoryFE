import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCommonComponent } from './layout-common.component';

describe('LayoutCommonComponent', () => {
  let component: LayoutCommonComponent;
  let fixture: ComponentFixture<LayoutCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
