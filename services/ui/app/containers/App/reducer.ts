import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

console.log("reducer.global");
// The initial state of the App
export const initialState: ContainerState = {
  loading: 0,
  error: false,
  isLogged: false,
  jwt: "",
  user: { id: -1, username: "" },
  todos: [],
  showHealth: false,
  info: { environment: "", podId: "", podIp: "", podNamespace: "", health: [] }
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  console.log(`GlobalReducer - ${action.type}`)
  switch (action.type) {
    case ActionTypes.SHOW_LOADING:
      return {
        ...state,
        loading: (action.payload) ?state.loading +1 : state.loading -1
      };
    case ActionTypes.LOGOUT:
      return initialState;
    case ActionTypes.SET_JWT:
      return {
        ...state,
        isLogged: true,
        jwt: action.payload.token,
        user: action.payload.user
      };
    case ActionTypes.LOAD_TODOS_SUSSESS:
      return {
        ...state,
        todos: action.payload
      };
    case ActionTypes.LOAD_TODOS_ERROR:
      return {
        ...state,
        error: true
      };
    case ActionTypes.SHOW_HEALTH:
      return {
        ...state,
        showHealth: true
      };
    case ActionTypes.CLOSE_HEALTH:
      return {
        ...state,
        showHealth: false
      };
    case ActionTypes.FETCH_HEALTH_SUCCESS:
      return {
        ...state,
        error: false,
        info: action.payload
      };
    case ActionTypes.FETCH_HEALTH_ERROR:
      return {
        ...state,
        error: true
      };
    //     case ActionTypes.LOAD_REPOS_SUCCESS:
    //       return {
    //         currentUser: action.payload.username,
    //         loading: false,
    //         error: state.error,
    //         userData: {
    //           repos: action.payload.repos,
    //         },
    //       };
    //     case ActionTypes.LOAD_REPOS_ERROR:

    //       const { error, loading, ...rest } = state;
    //       return {
    //         error: action.payload,
    //         loading: false,
    //         ...rest,
    //       };
    default:
      return state;
  }
}

export default appReducer;
