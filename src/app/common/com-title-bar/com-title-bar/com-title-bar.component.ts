import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-com-title-bar',
  templateUrl: './com-title-bar.component.html',
  styleUrls: ['./com-title-bar.component.sass']
})
export class ComTitleBarComponent implements OnInit {

  @Input() title: any;


  constructor() { }

  ngOnInit() {
  }

}
