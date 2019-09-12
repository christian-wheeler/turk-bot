import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { State } from './router.reducer'

export const getRouterState = createFeatureSelector
  <RouterReducerState<State>>('router')

export const getParams = createSelector(
  getRouterState,
  (state: RouterReducerState<State>) => state.state.params
)

export const getParam = createSelector(
  getParams,
  params => (param: string) => {
    if (params[param] !== undefined) return params[param]
    else return null
  }
)

export const getUrl = createSelector(
  getRouterState,
  (state: RouterReducerState<State>) => state === undefined ? '' : state.state.url
)

export class RouterSerializer implements RouterStateSerializer<State> {

  serialize(routerState: RouterStateSnapshot): State {
    const { url } = routerState
    const { queryParams } = routerState.root

    let state: ActivatedRouteSnapshot = routerState.root
    let { params } = state

    while (state.firstChild) {
      state = state.firstChild
      params = { ...params, ...state.params }
    }

    return { url, queryParams, params }
  }
}
