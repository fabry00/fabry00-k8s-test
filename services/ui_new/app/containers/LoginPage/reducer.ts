import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

// The initial state of the App
export const initialState: ContainerState = {
  username: '',
  password: '',
  error: false
};

const resetError = function (username: string, password: string, error?: boolean) {
  if (!error) { return false; }
  return (password !== '' || username !== '')
}

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
        error: resetError(action.payload, state.password, state.error),
        username: action.payload,
      };
    case ActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        error: resetError(
          state.username, action.payload, state.error),
        password: action.payload,
      };
    case ActionTypes.RESET:
      return initialState;
    case ActionTypes.LOGIN_USER_ERROR:
      return {
        ...state,
        error: true,
      };
    case ActionTypes.LOGIN_USER_SUSSESS:
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;
