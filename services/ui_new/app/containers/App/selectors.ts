import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';

const selectGlobal = (state: ApplicationRootState) => {
  return state.global;
};

const selectRoute = (state: ApplicationRootState) => state.router;

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.location);


const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.error);

const makeSelectIsLogged = () =>
  createSelector(selectGlobal, globalState => globalState.isLogged);


export { makeSelectLocation, makeSelectError, makeSelectIsLogged};
