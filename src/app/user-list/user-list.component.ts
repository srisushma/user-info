import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DeleteUser } from '../user/store/add-user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  usersList: User[];
  subscription: Subscription;
  filterUsername: string = '';
  doSort: boolean = false;
  constructor(private userService: UserService, private store: Store<{addUser: {users: User[]}}>) { }

  ngOnInit() {
    
    this.subscription = this.store.select('addUser').subscribe(
      data => {
        this.usersList = data.users;
      }
    )
    console.log("in user list component", this.usersList);
    // ** To access through API **
    // this.userService.getUsers().subscribe(
    //   (users) => {
    //     this.usersList = users;
    //     console.log("fetched Users", users)
    //   },
    //   (error) => {
    //     console.log("unable to fetch", error)    
    //   })
  }
  // ** To access through API **
  onDeleteUser(index) {
    this.store.dispatch(new DeleteUser(index));
    // ** To access through API **
    // this.userService.deleteUser(index).subscribe(
    //   (users) => {
    //     this.usersList = users;
    //     console.log("fetched Users", users)
    //   },
    //   (error) => {
    //     console.log("unable to fetch", error)    
    //   }
    // )
    // ** To access through API **
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
