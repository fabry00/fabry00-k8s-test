import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => {
  return state.global;
};

const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);

const makeSelectCurrentPath = () =>
  createSelector(selectRoute, routeState => routeState.location.pathname);

const makeSelectErrorTodos = () =>
  createSelector(selectGlobal, globalState => globalState.errorTodos);

const makeSelectErrorHealth = () =>
  createSelector(selectGlobal, globalState => globalState.errorHealth);

const makeSelectIsLogged = () =>
  createSelector(selectGlobal, globalState => globalState.isLogged);

const makeSelectJwt = () =>
  createSelector(selectGlobal, globalState => globalState.jwt);

const makeSelectTodos = () =>
  createSelector(selectGlobal, globalState => globalState.todos);

const makeSelectUser = () =>
  createSelector(selectGlobal, globalState => globalState.user);

const makeSelectShowHealth = () =>
  createSelector(selectGlobal, substate => {
    return substate.showHealth;
  });

const makeSelectInfo = () =>
  createSelector(selectGlobal, substate => {
    return substate.info;
  });

const makeSelectLoading = () =>
  createSelector(selectGlobal, substate => {
    return substate.loading;
  });

export {
  makeSelectLocation,
  makeSelectErrorHealth,
  makeSelectErrorTodos,
  makeSelectJwt,
  makeSelectIsLogged,
  makeSelectCurrentPath,
  makeSelectTodos,
  makeSelectUser,
  makeSelectShowHealth,
  makeSelectInfo,
  makeSelectLoading
};
