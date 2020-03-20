import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const changeUsername = (name: string) => action(ActionTypes.CHANGE_USERNAME, name);
export const changePassword = (password: string) => action(ActionTypes.CHANGE_PASSWORD, password);
