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


const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

const makeSelectIsLogged = () =>
  createSelector(selectGlobal, globalState => globalState.isLogged);


export { makeSelectLocation, makeSelectError, makeSelectIsLogged, makeSelectCurrentPath};
