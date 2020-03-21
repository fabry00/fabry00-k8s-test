import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { Todo, User } from './types';

export const setJwt = (token: string, user: User) => action(ActionTypes.SET_JWT, { token, user });
export const loadTodos = () => action(ActionTypes.LOAD_TODOS);
export const loadTodosSuccess = (todos: Todo[]) => action(ActionTypes.LOAD_TODOS_SUSSESS, todos);
export const loadTodosError = () => action(ActionTypes.LOAD_TODOS_ERROR);
