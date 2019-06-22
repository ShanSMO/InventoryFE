import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpenseBalanceComponent } from './income-expense-balance.component';

describe('IncomeExpenseBalanceComponent', () => {
  let component: IncomeExpenseBalanceComponent;
  let fixture: ComponentFixture<IncomeExpenseBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeExpenseBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpenseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
