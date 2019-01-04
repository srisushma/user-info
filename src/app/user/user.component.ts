import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { Store } from '@ngrx/store';
import { AddUser } from './store/add-user.actions'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userModel;
  userForm: FormGroup;
  isUserAdded: boolean= false;
  isError:boolean = false;
  constructor(private fb: FormBuilder, private userService: UserService, 
    private router: Router, private store: Store<{addUser: {users: User[]}}>) { }

  ngOnInit() {
    this.userModel = this.userService.users;
    this.userForm = this.fb.group({
        userName: [this.userModel.userName,Validators.required],
        firstName: [this.userModel.firstName,[Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
        lastName: [this.userModel.lastName, [Validators.required, Validators.pattern(/^[a-z0-9]+$/i)]],
        phoneNumber: [this.userModel.phoneNumber, [Validators.required, Validators.pattern(/^[0-9]+$/i)]],        
        interests: [this.userModel.interests, Validators.required]
    });
  }
  onAddUser() {
    const value = this.userForm.value;
    const newUser = new User(value.userName, value.firstName, value.lastName, value.phoneNumber, value.interests);
    this.store.dispatch(new AddUser(newUser));
    this.isUserAdded = true;
    this.isError = false;
    console.log("user added");
    // ** To access through API **
    // this.userService.addUser(newUser).subscribe(
    //   (response) => { console.log(response);
    //                   this.isUserAdded = true;
    //                   this.isError = false;
    //                 },
    //   (error) => {
    //     this.isError = true;
    //     this.isUserAdded = true;
    //     alert("Error: In Add User");
    //   }
    // );
    // ** To access through API **
  }
}
