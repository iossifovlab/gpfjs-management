import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { UserRow } from './users-management/users-management';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor() { }

  public getUserRows() {
    return of(UserRow.fromJsonArray([
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
    ]));
  }

  public getAllGroups() {
    return of(['group1', 'group2', 'group3', 'group4']);
  }
}
