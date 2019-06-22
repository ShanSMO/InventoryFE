import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.sass']
})
export class NotificationComponent implements OnInit {

  notificationList: any[] = [];

  constructor() { }

  ngOnInit() {
    // this.notificationList = [
    //   {title: 'Failed', message: 'Invalid login credentials, please insert correct credentials, otherwise account will be deactivate',  type: 'ERROR'},
    //   {title: 'Success', message: 'Customer created successfully',  type: 'SUCCESS'},
    //   {title: 'Information', message: 'User name and Password is required',  type: 'INFO'},
    //   {title: 'Warning', message: 'Please be careful when trying to delete this Item',  type: 'WARNING'}
    // ];
  }

}
