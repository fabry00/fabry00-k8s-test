import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */

interface HomeState {
  readonly showTodoModal: boolean;
  readonly newTodoTitle: string;
  readonly newTodoContent: string;
  readonly newTodoDate: string;
}


/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

type ContainerState = HomeState;
type ContainerActions = AppActions;

export { ContainerState, ContainerActions };
