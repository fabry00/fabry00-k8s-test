import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const setJwt = (token: string) => action(ActionTypes.SET_JWT, token);
