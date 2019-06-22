import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComTitleBarComponent } from './com-title-bar.component';

describe('ComTitleBarComponent', () => {
  let component: ComTitleBarComponent;
  let fixture: ComponentFixture<ComTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
