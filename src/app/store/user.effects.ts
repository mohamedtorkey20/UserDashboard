import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from './user.actions';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  
  //--------------effect search user By Id-------------------------
  searchUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.searchUserById),
      mergeMap((action) =>
        this.userService.searchUserById(action.id).pipe(
          map((user) => {
            this.router.navigate(['/users', user.id]);
            return UserActions.searchUserByIdSuccess({ user });
          }),
          catchError((error) => {

            //----toastr to show the message in Invalid user-------------------
            this.toastr.error('Please Enter Valid User', "User doesn't exist", {
              timeOut: 3000,
            });

            return of(UserActions.searchUserByIdFailure({ error }));
          })
        )
      )
    )
  );


}
