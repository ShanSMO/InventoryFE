import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  pricingGroups: any[] = [
    {id: 1, groupName: 'Basic' , description: '', price: 2500.00, currency: 'Rs.', groupCode: 'PR001', features: {}},
    {id: 2, groupName: 'Standard' , description: '', price: 4000.00, currency: 'Rs.', groupCode: 'PR002', features: {}},
    {id: 3, groupName: 'Premium' , description: '', price: 7500.00, currency: 'Rs.', groupCode: 'PR003', features: {}},
    {id: 4, groupName: 'Custom' , description: '', price: 25000.00, currency: 'Rs.', groupCode: 'PR004', features: {}},
  ];

  constructor() { }

  ngOnInit() {

  }

}
