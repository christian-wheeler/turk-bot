import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllUsers, selectUserEntities, State } from './user.reducer'
import { getParams } from '../router/router.selectors'

export const getUserFeature = createFeatureSelector<State>('user')
export const getAllUsers = createSelector(getUserFeature, selectAllUsers)
export const getUserEntities = createSelector(getUserFeature, selectUserEntities)
export const getUsersLoaded = createSelector(getUserFeature, (state) => state.loaded)
export const getUsersLoading = createSelector(getUserFeature, (state) => state.loading)

export const getCurrentUser = createSelector(
  getParams,
  getUserEntities,
  (params, entities) => {
    if (entities[params.id] === undefined) return null
    else return entities[params.id]
  }
)
