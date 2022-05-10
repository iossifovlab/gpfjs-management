import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './groups-management/groups-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { ManagementComponent } from './management/management.component';
import { DatasetsManagementComponent } from './datasets-management/datasets-management.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsManagementComponent,
    UsersManagementComponent,
    ManagementComponent,
    DatasetsManagementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
