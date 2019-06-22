import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.sass']
})
export class Dashboard3Component implements OnInit {

  public pieChartLabels: string[] = ['January', 'February', 'March',  'April', 'May'];
  public pieChartData: number[] = [21, 500, 10, 14, 250, 250, 250, 250];

  public barChartData = [
    {data: [150, 75, 160, 221, 45], label: 'Lable 1'},
    {data: [122, 500, 350, 100, 250], label: 'Label 2'},
    {data: [300, 250, 250, 250, 290], label: 'Label 3'}
  ];

  public colors =  [{
    backgroundColor: 'rgba(47, 132, 71, 0.8)',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    hoverBackgroundColor: 'rgba(47, 132, 71, 1)',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)',
    pointBorderColor: 'rgba(47, 132, 71, 1)'
  }, {
    backgroundColor: 'rgba(18, 159, 182, 0.8)',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    hoverBackgroundColor: 'rgba(18, 159, 182, 1)',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)'
  }, {
    backgroundColor: 'rgba(220, 120, 240, 0.8)',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    hoverBackgroundColor: 'rgba(220, 120, 240, 1)',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)'
  }];

  public pieChartType = 'bar';
  public chartType = 'pie';
  public chartType2 = 'line';
  public pieChartOptions: any = {
    backgroundColor: ['#1300c0'],
    responsive: true
  };


  constructor() { }

  ngOnInit() {
  }

}
