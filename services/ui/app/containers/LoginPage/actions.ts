import { action } from 'typesafe-actions';

import ActionTypes from './constants';
import { LoginResponse } from './types';

export const changeUsername = (name: string) => action(ActionTypes.CHANGE_USERNAME, name);
export const changePassword = (password: string) => action(ActionTypes.CHANGE_PASSWORD, password);
export const reset = () => action(ActionTypes.RESET);

export const loginUser = () => action(ActionTypes.LOGIN_USER);
export const loginError = () => action(ActionTypes.LOGIN_USER_ERROR);
export const loginSuccess = (response: LoginResponse) => action(ActionTypes.LOGIN_USER_SUSSESS, response);
