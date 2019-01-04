import { User } from 'src/app/shared/user.model';
import * as userActions from './add-user.actions';

export interface AppState {
    users: State;
}
export interface State {
    users: User[];
}
const initialState: State = {
    users: []
}
export function addUserReducer(state = initialState, action: userActions.AddUserActions) {
    switch(action.type) {
        case userActions.ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case userActions.DELETE_USER:
            const oldUserList = [...state.users];
            oldUserList.splice(action.payload, 1);
            return {
                ...state,
                users: oldUserList
            };
        default:
            return state;
    }
}