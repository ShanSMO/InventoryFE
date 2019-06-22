import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeSettingsComponent } from './privilege-settings.component';

describe('PrivilegeSettingsComponent', () => {
  let component: PrivilegeSettingsComponent;
  let fixture: ComponentFixture<PrivilegeSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivilegeSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
