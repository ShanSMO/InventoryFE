import { Component, OnInit } from '@angular/core';
import {StatisticService} from '../../services/statistic.service';
import {ActivityService} from '../../services/activity.service';

@Component({
  selector: 'app-summary-dashboard',
  templateUrl: './summary-dashboard.component.html',
  styleUrls: ['./summary-dashboard.component.sass'],
  providers: [StatisticService, ActivityService]
})
export class SummaryDashboardComponent implements OnInit {

  monthList: any[] = [
    {key: '1', value: 'January'},
    {key: '2', value: 'February'},
    {key: '3', value: 'March'},
    {key: '4', value: 'April'},
    {key: '5', value: 'May'},
    {key: '6', value: 'June'},
    {key: '7', value: 'July'},
    {key: '8', value: 'August'},
    {key: '9', value: 'September'},
    {key: '10', value: 'October'},
    {key: '11', value: 'November'},
    {key: '12', value: 'December'}
  ];

  yearsList: any[] = [
    {key: '18', value: '2018'},
    {key: '19', value: '2019'},
    {key: '20', value: '2020'},
    {key: '21', value: '2021'},
    {key: '22', value: '2022'}
  ];


  barChartData:any = [];
  pieChartLabels: any[] = [];
  public chartType = 'line';
  public product = 'line';
  public durationType = 'MONTHLY';
  opacity: any = (this.chartType === 'bar') ? 0.5 : 0.3;

  public colors =  [{
    backgroundColor: 'rgba(47, 132, 71, ' + this.opacity + ')',
    borderColor: '#26a8ac',
    hoverBackgroundColor: '#26a8ac',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)',
    pointBorderColor: 'rgba(47, 132, 71, 1)'
  }, {
    backgroundColor: 'rgba(18, 159, 182, 0.1)',
    borderColor: '#00a3b2',
    hoverBackgroundColor: 'rgba(18, 159, 182, 1)',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)'
  }, {
    backgroundColor: 'rgba(220, 120, 240, 0.8)',
    borderColor: 'rgba(0, 0, 0, 0.8)',
    hoverBackgroundColor: 'rgba(220, 120, 240, 1)',
    hoverBorderColor: 'rgba(47, 132, 71, 0.8)'
  }];

  public pieChartOptions: any = {
    backgroundColor: ['#1300c0'],
    responsive: true
  };

  statData: any = {};
  startDate: any;
  endDate: any;
  searchRequest: any = null;
  recentActivities: any[] = [];

  constructor(private statisticService: StatisticService, private activityService: ActivityService) { }

  ngOnInit() {
    const requestObject = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.statisticService.load(requestObject).subscribe(data => {
      this.statData = data.responseObject;
    });

    this.loadChartData();
    this.loadRecentActivities();
  }

  search() {
    this.searchRequest = {
      startDate: this.startDate,
      endDate: this.endDate
    };

    this.loadChartData();
  }

  changeChartType() {
    // this.opacity = (this.chartType === 'bar') ? 0.5 : 0.1;
  }

  changeProductType() {
    // this.opacity = (this.chartType === 'bar') ? 0.5 : 0.1;
  }




  loadChartData()  {
    let req;
    if (this.searchRequest == null) {
      req = {};
    } else {
      req = this.searchRequest;
    }

    req['companyId'] = JSON.parse(localStorage.getItem('usr')).company.id;

    this.barChartData = [];
    this.pieChartLabels = [];

    this.statisticService.loadChartData(req).subscribe(data => {


    this.pieChartLabels = data.responseObject.keyList;
    this.barChartData = [
        {
          data: data.responseObject.valueList,
          label: 'Sales'
        },
      ];
    });
  }

  loadRecentActivities() {
    const requestObject = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.activityService.loadAll(requestObject).subscribe(data => {
      if (data.status === 'SUCCESS') {
        this.recentActivities = data.responseItems;
      }
    });
  }

}
