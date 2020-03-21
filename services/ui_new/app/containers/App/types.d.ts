import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from '../../types';

/* --- STATE --- */

interface AppState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly isLogged: boolean;
  readonly jwt: string;
  readonly user: User;
  readonly todos: Todo[];
}

interface Todo {
  id: number;
  userId: number;
  title: string;
  content: string;
  created: number;
  expiration: number;
}
interface User {
  id: number;
  username: string;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions, User, Todo };
