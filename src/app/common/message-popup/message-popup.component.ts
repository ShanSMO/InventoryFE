import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
// import 'bootstrap';

@Component({
  selector: 'app-message-popup',
  templateUrl: './message-popup.component.html',
  styleUrls: ['./message-popup.component.sass']
})
export class MessagePopupComponent implements OnInit {

  @Input() type: any = null; // NORMAL, CONFIRM, WARNING, INFORMATION
  @Input() currentStatus: any =  null;
  @Input() statusList: any[] =  [];
  @Output() responseData: EventEmitter<any> = new EventEmitter();
  showPopup: boolean = true;

  constructor() { }

  ngOnInit() {

  }

  openModal() {
    this.showPopup = true;
    $('#removeProduct').modal('toggle');
  }

  action(act) {
    if (act === 'OK') {
      const obj = {
        selectedStatus: this.currentStatus
      };
      this.responseData.emit(obj);
    } else if (act === 'CANCEL') {

    }
  }

}
