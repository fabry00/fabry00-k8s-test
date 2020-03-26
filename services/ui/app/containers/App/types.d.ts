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
  id?: String;
  userId?: String;
  title: string;
  content: string;
  completed: boolean;
  created: number;
  expiration: number;
}

interface User {
  id: String;
  username: string;
}

interface Info {
  version: string,
  environment: string,
  podId: string,
  podNamespace: string,
  podIp: string,
  health: Health[]
}

interface Health {
  name: string,
  status: string,
  version: string,
  environment: string,
  podId: string,
  podNamespace: string,
  podIp: string,
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;


/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions, User, Todo, Info };
