import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GroupsManagementComponent } from './groups-management/groups-management.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { DatasetsManagementComponent } from './datasets-management/datasets-management.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemAddMenuComponent } from './item-add-menu/item-add-menu.component';
import { ArrayDifferencePipe } from './array-difference.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GroupsManagementComponent,
    UsersManagementComponent,
    DatasetsManagementComponent,
    ItemAddMenuComponent,
    ArrayDifferencePipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
    CommonModule,
    NgbNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
