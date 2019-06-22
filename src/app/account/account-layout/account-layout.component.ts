import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.sass']
})
export class AccountLayoutComponent implements OnInit {

  menuItemList: any[] = [
    {label: 'Daily In/Exp Sheet',  icon: 'fa fa-save', routerLink: '/sales-history'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
