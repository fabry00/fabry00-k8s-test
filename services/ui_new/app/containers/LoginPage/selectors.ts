import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectLogin = (state: ApplicationRootState) => {
  return state.login || initialState;
};

const makeSelectUsername = () =>
  createSelector(selectLogin, substate => {
    return substate.username;
  });

const makeSelectPassword = () =>
  createSelector(selectLogin, substate => {
    return substate.password;
  });

const makeSelectError = () =>
  createSelector(selectLogin, substate => {
    return substate.error;
  });

export { selectLogin,
makeSelectUsername,
makeSelectPassword,
makeSelectError };
