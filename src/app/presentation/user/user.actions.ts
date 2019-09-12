import { Action } from '@ngrx/store'
import { User } from '../../entity/user.entity'

export enum UserActionTypes {
  // Synchronous Actions: Handled by Reducers
  UpsertUser = '[User] Upsert User',
  UpsertUsers = '[User] Upsert Users',
  RemoveUser = '[User] Remove User',
  RemoveUsers = '[User] Remove Users',
  ClearUsers = '[User] Clear Users',
  // Asynchronous Actions: Handled by Effects
  LoadUsers = '[User] Load Users',
  CreateUser = '[User] Create User',
  CreateUsers = '[User] Create Users',
  UpdateUser = '[User] Update User',
  UpdateUsers = '[User] Update Users',
  DeleteUser = '[User] Delete User',
  DeleteUsers = '[User] Delete Users'
}

// Synchronous Actions: Handled by Reducers
export class UpsertUser implements Action {
  readonly type = UserActionTypes.UpsertUser
  constructor(public payload: { user: User }) { }
}

export class UpsertUsers implements Action {
  readonly type = UserActionTypes.UpsertUsers
  constructor(public payload: { users: User[] }) { }
}

export class RemoveUser implements Action {
  readonly type = UserActionTypes.RemoveUser
  constructor(public payload: { id: string }) { }
}

export class RemoveUsers implements Action {
  readonly type = UserActionTypes.RemoveUsers
  constructor(public payload: { ids: string[] }) { }
}

export class ClearUsers implements Action {
  readonly type = UserActionTypes.ClearUsers
}

// Asynchronous Actions: Handled by Effects
export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers
}

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser
  constructor(public payload: { user: User }) { }
}

export class CreateUsers implements Action {
  readonly type = UserActionTypes.CreateUsers
  constructor(public payload: { users: User[] }) { }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser
  constructor(public payload: { user: User }) { }
}

export class UpdateUsers implements Action {
  readonly type = UserActionTypes.UpdateUsers
  constructor(public payload: { users: User[] }) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DeleteUser
  constructor(public payload: { user: User }) { }
}

export class DeleteUsers implements Action {
  readonly type = UserActionTypes.DeleteUsers
  constructor(public payload: { users: User[] }) { }
}

export type UserActions =
  UpsertUser
  | UpsertUsers
  | RemoveUser
  | RemoveUsers
  | ClearUsers
  | LoadUsers
  | CreateUser
  | CreateUsers
  | UpdateUser
  | UpdateUsers
  | DeleteUser
  | DeleteUsers
