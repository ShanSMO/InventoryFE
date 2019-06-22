import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleSettingsComponent } from './user-role-settings.component';

describe('UserRoleSettingsComponent', () => {
  let component: UserRoleSettingsComponent;
  let fixture: ComponentFixture<UserRoleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
