import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { Todo, User, Info } from './types';

export const logoutUser = () => action(ActionTypes.LOGOUT);
export const setJwt = (token: string, user: User) => action(ActionTypes.SET_JWT, { token, user });

export const deleteTodo = (id: number) => action(ActionTypes.DELETE_TODO, id);
export const deleteAllTodos = () => action(ActionTypes.DELETE_ALL_TODOS);
export const loadTodos = () => action(ActionTypes.LOAD_TODOS);
export const loadTodosSuccess = (todos: Todo[]) => action(ActionTypes.LOAD_TODOS_SUSSESS, todos);
export const loadTodosError = () => action(ActionTypes.LOAD_TODOS_ERROR);

export const fetchHealth = () => action(ActionTypes.FETCH_HEALTH);
export const fetchHealthSuccess = (health: Info) => action(ActionTypes.FETCH_HEALTH_SUCCESS, health);
export const fetchHealthError = () => action(ActionTypes.FETCH_HEALTH_ERROR);
export const showHealth = () => action(ActionTypes.SHOW_HEALTH);
export const closeHealth = () => action(ActionTypes.CLOSE_HEALTH);

export const showLoading = (show: boolean) => action(ActionTypes.SHOW_LOADING, show);
