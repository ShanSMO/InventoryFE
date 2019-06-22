import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComMapComponent } from './com-map.component';

describe('ComMapComponent', () => {
  let component: ComMapComponent;
  let fixture: ComponentFixture<ComMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
