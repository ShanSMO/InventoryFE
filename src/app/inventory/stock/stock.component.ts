import { Component, OnInit } from '@angular/core';
import {StockService} from '../../services/stock.service';
import {GlobalProperties} from '../../global-properties';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.sass'],
  providers: [StockService]
})
export class StockComponent implements OnInit {

  resourceUrl: any = GlobalProperties.RESOURCE_URL;
  stock: any[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.loadStockAsGroup();
  }

  loadStockAsGroup() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.stockService.loadAllAsGroup(request).subscribe(data => {
      this.stock  = data.responseItems;
    });
  }

}
