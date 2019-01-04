import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserListComponent } from './user-list.component';

const userListRoutes: Routes = [
    { path: '', component: UserListComponent}
];

@NgModule({
    imports: [RouterModule.forChild(userListRoutes)],    
    exports: [RouterModule]
})
export class UserListRoutingModule { }