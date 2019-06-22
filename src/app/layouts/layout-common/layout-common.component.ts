import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.css']
})
export class LayoutCommonComponent implements OnInit {

  loggedInStatus: string = 'false';
  time: any = new Date();
  loggedInUser: any = null;
  hasUnreadNotifications: boolean = false;
  hasUnreadMessages: boolean = false;
  hasMessage: boolean = false;

  constructor(private route: Router) { }

  ngOnInit() {

    this.loggedInStatus = localStorage.getItem('login-status');

    if (this.loggedInStatus == null || this.loggedInStatus === 'false') {
      this.route.navigateByUrl('/login');
    } else {
      setInterval(() => {
        this.time = new Date();
      }, 1000);

      this.loggedInUser = JSON.parse(localStorage.getItem('usr')).displayName;
    }
  }

  openNavigation() {
    if ($('#sideNav').hasClass('side-nav')) {
      $('#sideNav').removeClass('side-nav').addClass('side-nav-mini');
      $('.menu-item-lbl').removeClass('menu-item-lbl').addClass('menu-item-lbl-mini');
    } else {
      $('#sideNav').removeClass('side-nav-mini').addClass('side-nav');
      $('.menu-item-lbl-mini').removeClass('menu-item-lbl-mini').addClass('menu-item-lbl');
    }
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

  setSideNavigation(status) {
    if (!status) {
      $('#sideNav').removeClass('side-nav').addClass('side-nav-mini');
      $('.menu-item-lbl').removeClass('menu-item-lbl').addClass('menu-item-lbl-mini');
    } else {
      $('#sideNav').removeClass('side-nav-mini').addClass('side-nav');
      $('.menu-item-lbl-mini').removeClass('menu-item-lbl-mini').addClass('menu-item-lbl');
    }
  }

}
