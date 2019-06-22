import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-map',
  templateUrl: './com-map.component.html',
  styleUrls: ['./com-map.component.sass']
})
export class ComMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
