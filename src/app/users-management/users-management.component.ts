import { Component, OnInit } from '@angular/core';
import { UserRow } from './users-management';

@Component({
  selector: 'gpf-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  public userRows: UserRow[] = UserRow.fromJsonArray([
    {
      email: 'email1',
      groups: ['group1', 'group2'],
      datasets: ['dataset1', 'dataset2', 'dataset3']
    },
    {
      email: 'email2',
      groups: ['group2', 'group3'],
      datasets: ['dataset2', 'dataset3', 'dataset4']
    },
    {
      email: 'email3',
      groups: ['group3', 'group4'],
      datasets: ['dataset3', 'dataset4', 'dataset5']
    }
  ]);

  constructor() { }

  ngOnInit(): void {
  }
}
