import { Component, OnInit } from '@angular/core';
import {GlobalProperties} from '../../global-properties';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.sass']
})
export class SideNavigationComponent implements OnInit {

  accessibleItems: any[] = [];
  loggedCompany: any = '';
  loggedInUser: any = null;
  logoImage = 'assets/images/profile-img.jpg';
  resourceUrl: any = GlobalProperties.RESOURCE_URL;

  constructor() { }

  ngOnInit() {
    this.setSideNav();
    this.loggedInUser = JSON.parse(localStorage.getItem('usr')).displayName;
  }


  setSideNav() {
    this.accessibleItems = JSON.parse(localStorage.getItem('usr')).privilegeTypes;
    this.loggedCompany = JSON.parse(localStorage.getItem('usr')).company.companyName;
    if (JSON.parse(localStorage.getItem('usr')).company.companyLogo != null) {
      this.logoImage = this.resourceUrl + JSON.parse(localStorage.getItem('usr')).company.companyLogo;
    }
  }

  getPrivileges(navItem) {
    console.log(navItem);
  }

}
