import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  username: '',
  password: ''
};


// Take this container's state (as a slice of root state), this container's actions and return new state
function loginReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {

  console.log(` - ${action.type}`);

  switch (action.type) {
    case ActionTypes.CHANGE_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case ActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
}

export default loginReducer;
