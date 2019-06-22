import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {
    id: 1,
    firstName: 'Shanaka',
    lastName: 'Madushanka',
    nicNumber: '',
    phoneNumber: '0766254532',
    address: {
      houseNo: 'No 125/1',
      street: 'Keenagasmanana',
      city: 'Dodangoda',
      country: 'Sri Lanka',
      zipCode: '12020'
    },
    rates: 5,
    email: 'madushanka991@gmail.com',
    website: 'www.test.com',
    facebookUrl: 'http://www.facebook.com/shanaka.madushanka',
    twitterUrl: 'www.twitter.com',
    gender: 'Male'
  };

  constructor() { }

  ngOnInit() {
  }

}
