import { Action } from '@ngrx/store'
import { NavigationExtras } from '@angular/router'

export enum RouterActionTypes {
  Navigate = '[Router] Navigate',
  Forward = '[Router] Navigate',
  Backward = '[Router] Navigate',
}

export class Navigate implements Action {
  readonly type = RouterActionTypes.Navigate

  constructor(public payload: {
    path: any[],
    query?: object,
    extras?: NavigationExtras
  }) { }
}

export class Backward implements Action {
  readonly type = RouterActionTypes.Backward
}

export class Forward implements Action {
  readonly type = RouterActionTypes.Forward
}

export type RouterActions =
  Navigate |
  Backward |
  Forward
