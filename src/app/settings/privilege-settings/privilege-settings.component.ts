import { Component, OnInit } from '@angular/core';
import {PrivilegesService} from '../../services/privileges.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-privilege-settings',
  templateUrl: './privilege-settings.component.html',
  styleUrls: ['./privilege-settings.component.sass'],
  providers: [PrivilegesService, UserService]
})
export class PrivilegeSettingsComponent implements OnInit {

  accessLevels: any[] = [];
  selectedSubLevel: any[] = [];
  selectedSubLevel2: any[] = [];
  userList: any[] = [];
  selectedUserId: number = null;

  constructor(private privilegesService: PrivilegesService,
              private userService: UserService) { }

  ngOnInit() {
    this.loadPrivileges();
    this.loadUsers();
  }

  loadPrivileges() {
    const request = {
      relatedCompany: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      userId: this.selectedUserId
    };
    this.privilegesService.loadAll(request).subscribe(data => {
      this.accessLevels = data.responseItems;
    });
  }

  setSelectedSubLevel(headLevel) {
    this.selectedSubLevel2 = [];
    this.selectedSubLevel = [];

    const request = {
      relatedCompany: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      },
      parentId: headLevel.id,
      userId: this.selectedUserId
    };
    this.privilegesService.loadAll(request).subscribe(data => {
      this.selectedSubLevel = data.responseItems;
    });
  }

  setSelectedSubLevel2(headLevel) {
    // this.selectedSubLevel2 = headLevel.subLevels;
  }

  loadUsers() {
    const request = {
      company: {
        id: JSON.parse(localStorage.getItem('usr')).company.id
      }
    };
    this.userService.loadByCompany(request).subscribe(data => {
      this.userList = data.responseItems;
    });
  }

  assignPrivileges(prv, event) {
    const request = {
      assignType: event.target.checked ? 'ADD' : 'REMOVE',
      id: prv.id,
      userId: this.selectedUserId
    };

    this.privilegesService.assign(request).subscribe(data => {

    });
  }
}
