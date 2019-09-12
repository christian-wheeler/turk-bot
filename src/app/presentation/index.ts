import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromUser from './user/user.reducer';
import * as fromRouter from './router/router.reducer';
import { UserEffects } from './user/user.effects';
import { routerReducer, RouterReducerState } from '@ngrx/router-store'

export interface State {
  user: fromUser.State;
  router: RouterReducerState<fromRouter.State>,
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  user: fromUser.reducer,
}

export const effects = [
  UserEffects,
]
