import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.sass']
})
export class MenuBarComponent implements OnInit {

  @Input() menuList: any[];

  constructor() {
  }

  ngOnInit() {
  }

  setSelected(id) {
    $('.menu').removeClass('selected');
    $('#' + id).addClass('selected');
  }

}
