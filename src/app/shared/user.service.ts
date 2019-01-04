import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: User[];
  users: User = {
    userName: "",
    firstName: "",
    lastName: "",
    phoneNumber: null,
    interests: "",
  }
  constructor(private http: HttpClient) { }
  // ** To access through API **
  // addUser(userDetails) {
  //   return this.http.post("https://userstore-e871e.firebaseio.com/user.json",userDetails)
  // }
  // getUsers() {
  //   return this.http.get("https://userstore-e871e.firebaseio.com/user.json").pipe(
  //     map((response: Response) => {
  //       let users: any[] = [];
  //       Object.keys(response).map((key) => {
  //         console.log(response[key])
  //         users.push(response[key]);
  //       })
  //       this.userList= users;
  //       return this.userList;
  //     })
  //   )
  // }
  // deleteUser(index) {
  //   return this.http.delete("https://userstore-e871e.firebaseio.com/user.json"+index).pipe(
  //     map((response: Response) => {
  //       let users: any[] = [];
  //       Object.keys(response).map((key) => {
  //         console.log(response[key])
  //         users.push(response[key]);
  //       })
  //       this.userList= users;
  //       return this.userList;
  //     })
  //   )
  // }
  // ** To access through API **
}
