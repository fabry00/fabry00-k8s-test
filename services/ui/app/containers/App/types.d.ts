import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from '../../types';

/* --- STATE --- */

interface AppState {
  readonly loading: number;
  readonly errorHealth: boolean;
  readonly errorTodos: boolean;
  readonly isLogged: boolean;
  readonly jwt: string;
  readonly user: User;
  readonly todos: Todo[];
  readonly showHealth: boolean;
  readonly info: Info;
}

interface Todo {
  id?: number;
  userId?: number;
  title: string;
  content: string;
  created: number;
  expiration: number;
}

interface User {
  id: number;
  username: string;
}

interface Info {
  environment: string,
  podId: string,
  podNamespace: string,
  podIp: string,
  health: Health[]
}

interface Health {
  name: string,
  status: string
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions, User, Todo, Info };
