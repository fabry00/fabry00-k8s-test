import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  showTodoModal: false,
  newTodoContent: '',
  newTodoDate: '',
  newTodoTitle: ''
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function homeReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {

  console.log(` - ${action.type}`);

  switch (action.type) {
    case ActionTypes.SHOW_ADD_TODO_MODAL:
      return {
        ...state,
        showTodoModal: action.payload
      };
    case ActionTypes.CHANGE_TODO_TITLE:
      return {
        ...state,
        newTodoTitle: action.payload
      };
    case ActionTypes.CHANGE_TODO_CONTENT:
      return {
        ...state,
        newTodoContent: action.payload
      };
    case ActionTypes.CHANGE_TODO_DATE:
      return {
        ...state,
        newTodoDate: action.payload
      };
    default:
      return state;
  }
}

export default homeReducer;
