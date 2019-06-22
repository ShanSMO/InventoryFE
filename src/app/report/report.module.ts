import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReceiptComponent } from './sales-receipt/sales-receipt.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SalesReceiptComponent, InvoiceComponent],
  exports: [SalesReceiptComponent, InvoiceComponent]
})
export class ReportModule { }
