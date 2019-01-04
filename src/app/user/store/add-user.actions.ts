import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/user.model';

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: User) {

    }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: number) {

    }
}

export type AddUserActions = AddUser | DeleteUser;