import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { IUser } from '../models/user.model';

export interface UserState {
  user: IUser | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.searchUserByIdSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  
  on(UserActions.searchUserByIdFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(UserActions.clear, (state) => initialState)
);
