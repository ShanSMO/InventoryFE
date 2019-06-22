import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {SearchServiceService} from '../../services/search-service.service';
import {PrivilegesService} from '../../services/privileges.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.sass'],
  providers: [UserService, SearchServiceService, PrivilegesService]
})
export class UserSettingsComponent implements OnInit {

  searchRequest: any = {};
  totalRecords: number = 0;
  currentPage: number = 0;
  userList: any[] = [];
  searchOptions: any[] =  [
    {
      label: 'Customer Name',
      fieldName: 'firstName',
      type: 'TEXT',
      value: null
    } , {
      label: 'Phone Number',
      fieldName: 'phoneNumber',
      type: 'TEXT',
      value: null
    }
  ];

  userForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userPassword: new FormControl(),
    displayName: new FormControl(),
  });
  constructor(private userService: UserService,
              private searchService: SearchServiceService,
              private privilegesService: PrivilegesService) { }

  ngOnInit() {
    this.loadUsersByCompanyId();
  }

  createUser()  {
    let request = this.userForm.value;
    request['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.userService.create(request).subscribe(data => {
      this.userForm.reset();
      this.loadUsersByCompanyId();
    });
  }

  loadUsersByCompanyId() {
    this.totalRecords = 0;
    this.searchRequest['company'] = {
      id: JSON.parse(localStorage.getItem('usr')).company.id
    };
    this.searchRequest.currentPage = 0;
    this.searchService.searchUser(this.searchRequest).subscribe(data => {
      this.userList = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

  goToPage(request)  {
    this.currentPage = request - 1;
    this.searchRequest.currentPage = request - 1;
    this.searchService.searchUser(this.searchRequest).subscribe(data => {
      this.userList = data.searchItems;
      this.totalRecords = data.recordCount;
    });
  }

  deleteUser(option) {

  }

}
