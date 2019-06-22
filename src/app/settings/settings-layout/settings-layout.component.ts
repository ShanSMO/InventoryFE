import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-layout',
  templateUrl: './settings-layout.component.html',
  styleUrls: ['./settings-layout.component.sass']
})
export class SettingsLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'User Settings',  icon: 'fa fa-user', routerLink: '/user-settings'},
    {label: 'Company Settings',  icon: 'fa fa-file', routerLink: '/receipt-settings'},
    {label: 'Privilege Settings',  icon: 'fa fa-key', routerLink: '/privilege-settings'},
    // {label: 'Profile Settings',  icon: 'fa fa-key', routerLink: '/company-settings'},
    // {label: 'Role Settings',  icon: 'fa fa-users', routerLink: '/role-settings'},
    // {label: 'Notification Settings',  icon: 'fa fa-bell-o', routerLink: '/role-settings'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
