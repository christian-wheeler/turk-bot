import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { UserNetwork } from '../../domain/gateways/network/user.network'
import {
  CreateUser,
  CreateUsers, DeleteUser, DeleteUsers,
  LoadUsers, RemoveUser, RemoveUsers,
  UpdateUser, UpdateUsers,
  UpsertUser,
  UpsertUsers,
  UserActionTypes,
} from './user.actions'
import { User } from '../../entity/user.entity'

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private network: UserNetwork) {}

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    switchMap((action: LoadUsers) => this.network.readList().pipe(
      map((users: User[]) => new UpsertUsers({ users: users })),
      catchError(error => {
        return of({
          type: '[Error] Load Users',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createUser$ = this.actions$.pipe(
    ofType(UserActionTypes.CreateUser),
    switchMap((action: CreateUser) => this.network.create(action.payload.user).pipe(
      map((user: User) => new UpsertUser({ user: user })),
      catchError(error => {
        return of({
          type: '[Error] Create User',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.CreateUsers),
    switchMap((action: CreateUsers) => this.network.createList(action.payload.users).pipe(
      map((users: User[]) => new UpsertUsers({ users: users })),
      catchError(error => {
        return of({
          type: '[Error] Create Users',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType(UserActionTypes.UpdateUser),
    switchMap((action: UpdateUser) => this.network.update(action.payload.user).pipe(
      map((user: User) => new UpsertUser({ user: user })),
      catchError(error => {
        return of({
          type: '[Error] Update User',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.UpdateUsers),
    switchMap((action: UpdateUsers) => this.network.updateList(action.payload.users).pipe(
      map((users: User[]) => new UpsertUsers({ users: users })),
      catchError(error => {
        return of({
          type: '[Error] Update Users',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType(UserActionTypes.DeleteUser),
    switchMap((action: DeleteUser) => this.network.delete(action.payload.user).pipe(
      map((user: User) => new RemoveUser({ id: user.id })),
      catchError(error => {
        return of({
          type: '[Error] Delete User',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.DeleteUsers),
    switchMap((action: DeleteUsers) => this.network.deleteList(action.payload.users).pipe(
      map((users: User[]) => new RemoveUsers({ ids: users.map(user => user.id) })),
      catchError(error => {
        return of({
          type: '[Error] Delete Users',
          payload: error
        })
      })
    ))
  )
}
