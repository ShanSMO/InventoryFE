import {Component, Input, OnInit} from '@angular/core';
import {TosServiceService} from '../../services/tos-service.service';
import {GlobalProperties} from '../../global-properties';
import {CompanyService} from '../../services/company.service';
import {SalesService} from '../../services/sales.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sales-receipt',
  templateUrl: './sales-receipt.component.html',
  styleUrls: ['./sales-receipt.component.sass'],
  providers: [TosServiceService, CompanyService, SalesService]
})
export class SalesReceiptComponent implements OnInit {

  companyLogo = './assets/images/sample-logo.png';

  @Input() salesItems: any[] = [];
  @Input() totalAmount = 0;
  @Input() totalDiscount = 0;
  totalInvoice = 0;
  termsAndConditions: any[] = [];
  companyId: any = null;
  sale: any = null;
  company: any = null;

  constructor(private tosServiceService: TosServiceService,
              private companyService: CompanyService,
              private actRoute: ActivatedRoute,
              private route: Router,
              private _location: Location,
              private salesService: SalesService) { }

  ngOnInit() {
    const request = {
      id: this.actRoute.snapshot.params.id
    };
    this.salesService.loadById(request).subscribe(data => {
      if (data.responseObject !== null) {
        this.sale = data.responseObject;
        this.salesItems = data.responseObject.salesOrderItems;
        this.totalAmount = data.responseObject.orderAmount;
        data.responseObject.salesOrderItems.forEach((item) =>  {this.totalDiscount = this.totalDiscount + item.discount; } );
        this.totalInvoice = (this.totalAmount) + (this.totalDiscount);
      }
    });

    this.companyId =  JSON.parse(localStorage.getItem('usr')).company.id;
    this.loadCompanyData();
    this.loadTos();

  }

  loadSale(saleId) {
    const request = {
      id: saleId
    };

    this.salesService.loadById(request).subscribe(data => {
      this.salesItems = data.responseItems;
    });
  }

  loadTos() {
    const request = {
      company: {
        id: this.companyId
      }
    };
    this.tosServiceService.loadAll(request).subscribe(data => {
      this.termsAndConditions = data.responseItems;
    });
  }

  loadCompanyData()  {

    const reqeustBody = {
      id: this.companyId
    };
    this.companyService.loadById(reqeustBody).subscribe(data => {

      if (data.status === 'SUCCESS') {
        this.company = data.responseObject;
        this.companyLogo = this.company.companyLogo !== null ?
          GlobalProperties.RESOURCE_URL.concat('/').concat(this.company.companyLogo) :
          './assets/images/sample-logo.png';
      } else {

      }

    });
  }

  goBack() {
    // this.route.navigateByUrl('/sales');
    this._location.back();
  }

  printDiv() {
    const dClass = this.salesItems.length > 5 ? 'a4-paper' : 'a5-paper';
    const divToPrint = document.getElementById('paper');
    const newWin = window.open('', 'Print-Window');
    newWin.document.open();
    newWin.document.write('<html><head><link rel="stylesheet" href="./assets/css/report-styles.css"/></head><body onload="window.print()" class="' + dClass + '">' + divToPrint.innerHTML + '</body></html>');
    newWin.document.close();

  }

}
