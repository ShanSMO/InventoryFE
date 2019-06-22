import { Component, OnInit } from '@angular/core';
import {ManagementService} from '../../services/management.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-income-expense-balance',
  templateUrl: './income-expense-balance.component.html',
  styleUrls: ['./income-expense-balance.component.sass'],
  providers: [ManagementService]
})
export class IncomeExpenseBalanceComponent implements OnInit {

  requestForm: FormGroup = new FormGroup({
    fromDate: new FormControl(),
    toDate: new FormControl()
  });

  fromDate: any = new Date();
  toDate: any = new Date();

  maxDate: any = new Date();
  dataSet: any[] = [];
  incomeSet: any[] = [];
  expenseSet: any[] = [];
  totalExpense: any = 0;
  totalIncome: any = 0;

  constructor(private managementService: ManagementService) { }

  ngOnInit() {
    this.getData();
  }

  setDate() {
    this.dataSet = null;
    this.incomeSet = [];
    this.expenseSet = [];
    this.getData();
  }

  getData()  {
    const request = {
      fromDate: this.fromDate,
      toDate: this.toDate,
    };

    request['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };

    this.managementService.loadAll(request).subscribe(data => {
      this.dataSet = data.searchObject;
      this.incomeSet = data.searchObject.income.incomeItems;
      this.expenseSet = data.searchObject.expense.expenseItems;
      this.totalIncome = data.searchObject.income.totalIncome;
      this.totalExpense = data.searchObject.expense.totalExpense;
    });
  }

}
