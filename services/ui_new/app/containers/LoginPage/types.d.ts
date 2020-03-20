import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface LoginState {
  readonly username: string;
  readonly password: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

type ContainerState = LoginState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
