import { Component, OnInit } from '@angular/core';
import { ItemAddEvent } from 'app/item-add-menu/item-add-menu';
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
  // Primitive used for triggering change detection
  public manualPipeTrigger = 0;

  constructor(
    private managementService: ManagementService
  ) { }

  public ngOnInit(): void {
    this.managementService.getUserRows().subscribe(rows => {
      this.userRows = rows;
    });
    this.managementService.getAllGroups().subscribe(groups => {
      this.allGroups = groups;
    });
  }

  public addGroup($event: ItemAddEvent) {
    this.userRows[this.userRows.findIndex(user => user.email === $event.id)].groups.push($event.item);
  }

  public removeGroup(userRow: UserRow, group: string) {
    userRow.groups.splice(userRow.groups.indexOf(group), 1);
    this.manualPipeTrigger++;
  }

  public deleteUser(userRow: UserRow) {
    this.userRows.splice(this.userRows.indexOf(userRow), 1);
  }
}
