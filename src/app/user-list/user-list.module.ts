import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { FilterPipe } from '../shared/filter.pipe';
import { SortPipe } from '../shared/sort.pipe';


@NgModule({
  declarations: [
    UserListComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserListRoutingModule
  ]
})
export class UserListModule { }
