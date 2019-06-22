import {AfterViewInit, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  title = 'app';
  loggedInStatus: string = 'false';


  constructor(private route: Router) {
    this.loggedInStatus = localStorage.getItem('login-status');
    if (this.loggedInStatus === 'false') {
      this.route.navigateByUrl('/login');
    }
  }

  ngOnInit()  {
    this.loggedInStatus = localStorage.getItem('login-status');
    if (this.loggedInStatus === 'false') {
      this.route.navigateByUrl('/login');
    }
  }

  ngOnDestroy() {
  }

  ngOnChanges() {
  }

}
