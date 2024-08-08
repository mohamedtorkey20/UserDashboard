import { createAction, props } from '@ngrx/store';
import { IUser } from '../models/user.model';

export const searchUserById = createAction(
  '[User] Search User By ID',
  props<{ id: number }>()
);
export const searchUserByIdSuccess = createAction(
  '[User] Search User By ID Success',
  props<{ user: IUser }>()
);
export const searchUserByIdFailure = createAction(
  '[User] Search User By ID Failure',
  props<{ error: string }>()
);
export const clear = createAction('[User] Clear');
