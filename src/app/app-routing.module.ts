import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-list',
    loadChildren: './user-list/user-list.module#UserListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
