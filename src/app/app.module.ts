import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './groups-management/groups-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { DatasetsManagementComponent } from './datasets-management/datasets-management.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsManagementComponent,
    UsersManagementComponent,
    DatasetsManagementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
