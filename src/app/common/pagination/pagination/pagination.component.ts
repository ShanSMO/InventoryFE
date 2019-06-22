import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements OnInit {

  @Input() recordCount = 0;
  @Input() recordsPerPage = 10;
  @Output() goToThePage: EventEmitter<any> = new EventEmitter();

  pageCount = 0;
  pageCountArray: number[] = [];

  startPage = 0;
  endPage = 5;
  hasMorePages = false;
  hasLessPages = false;

  constructor() {
    $('#selected_1').addClass('current-p');
  }

  ngOnInit() {

    this.setPages();
  }

  goToPage(pageId) {
    this.goToThePage.emit(pageId);
    $('.page-link').removeClass('current-p');
    $('#selected_' + pageId).addClass('current-p');
  }

  setPages() {
    if ((this.recordCount % this.recordsPerPage) !== 0) {
      this.pageCount = (this.recordCount / this.recordsPerPage) + 1;
    } else {
      this.pageCount = (this.recordCount / this.recordsPerPage);
    }

    for (let itemId = 1 ; itemId <= this.pageCount ; itemId ++) {
      this.pageCountArray.push(itemId);
    }

    if (this.pageCountArray.length > 0) {
      this.hasMorePages = this.pageCountArray.length > 5;
      this.endPage = 5;
    } else {
      this.endPage = this.pageCountArray.length;
    }

  }

  addFront() {
    if ((this.endPage + 1) < this.pageCount) {
      this.endPage = this.endPage + 1;
      this.startPage = this.startPage + 1;
      for (let itemId = this.startPage ; itemId <= this.endPage ; itemId ++) {
        this.pageCountArray.push(itemId);
      }
      this.hasLessPages = true;
    } else {
      this.hasMorePages = false;
    }
  }

  addBack() {
    if (this.startPage > 0 ) {
      this.hasLessPages = true;
      this.hasMorePages = true;
      this.endPage = this.endPage - 1;
      this.startPage = this.startPage - 1;
      for (let itemId = this.startPage; itemId <= this.endPage; itemId++) {
        this.pageCountArray.push(itemId);
      }
    } else {
      this.hasLessPages = false;
    }
  }

}
