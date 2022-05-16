import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'app/management.service';
import { UserRow } from './users-management';

@Component({
  selector: 'gpf-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {
  public userRows: UserRow[] = [];
  public allGroups: string[] = [];

  constructor(
    private managementService: ManagementService
  ) { }

  ngOnInit(): void {
    this.managementService.getUserRows().subscribe(rows => {
      this.userRows = rows;
    });
    this.managementService.getAllGroups().subscribe(groups => {
      this.allGroups = groups;
    });
  }
}
