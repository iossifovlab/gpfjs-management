import { ManagementService } from 'app/management.service';
import { UserRow } from './users-management';
import { of } from 'rxjs';

import { UsersManagementComponent } from './users-management.component';
import { ItemAddEvent } from 'app/item-add-menu/item-add-menu';

const userRowsArrayJson = [
  {
    email: 'email1',
    groups: ['group1', 'group2', 'group3'],
    datasets: ['dataset1', 'dataset2', 'dataset3']
  },
  {
    email: 'email2',
    groups: ['group4', 'group5', 'group6'],
    datasets: ['dataset4', 'dataset5', 'dataset6']
  },
  {
    email: 'email3',
    groups: ['group7', 'group8', 'group9'],
    datasets: ['dataset7', 'dataset8', 'dataset9']
  }
];

const allGroups = [
  'group1',
  'group2',
  'group3',
  'group4',
  'group5',
  'group6',
  'group7',
  'group8',
  'group9'
];

describe('UsersManagementComponent', () => {
  let managementService: ManagementService;
  let component: UsersManagementComponent;

  beforeEach(() => {
    managementService = new ManagementService();
    component = new UsersManagementComponent(managementService);
    jest.spyOn(managementService, 'getUserRows').mockReturnValue(of(UserRow.fromJsonArray(userRowsArrayJson)));
    jest.spyOn(managementService, 'getAllGroups').mockReturnValue(of(allGroups));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get rows and all groups', () => {
    component.ngOnInit();
    expect(component.userRows).toEqual(UserRow.fromJsonArray(userRowsArrayJson));
    expect(component.allGroups).toEqual(allGroups);
  });

  it('should add group to user', () => {
    component.ngOnInit();

    component.addGroup(new ItemAddEvent('email2', 'newGroup1'));
    expect(component.userRows[0].groups).not.toContain('newGroup1');
    expect(component.userRows[1].groups).toContain('newGroup1');
    expect(component.userRows[2].groups).not.toContain('newGroup1');

    component.addGroup(new ItemAddEvent('email3', 'newGroup2'));
    expect(component.userRows[0].groups).not.toContain('newGroup2');
    expect(component.userRows[1].groups).not.toContain('newGroup2');
    expect(component.userRows[2].groups).toContain('newGroup2');
  });

  it('should remove group from user', () => {
    component.ngOnInit();

    component.removeGroup(component.userRows[0], 'group2');
    expect(component.userRows[0].groups).toContain('group1');
    expect(component.userRows[0].groups).not.toContain('group2');
    expect(component.userRows[0].groups).toContain('group3');

    component.removeGroup(component.userRows[2], 'group7');
    expect(component.userRows[2].groups).not.toContain('group7');
    expect(component.userRows[2].groups).toContain('group8');
    expect(component.userRows[2].groups).toContain('group9');
  });

  it('should remove user', () => {
    component.ngOnInit();

    component.deleteUser(component.userRows[0]);
    expect(component.userRows[0].email).toEqual('email2');
    expect(component.userRows[1].email).toEqual('email3');
    expect(component.userRows.length).toBe(2);

    component.deleteUser(component.userRows[1]);
    expect(component.userRows[0].email).toEqual('email2');
    expect(component.userRows.length).toBe(1);
  });
});
