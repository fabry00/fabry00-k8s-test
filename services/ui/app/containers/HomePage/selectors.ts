import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectHome = (state: ApplicationRootState) => {
  return state.home || initialState;
};

const makeSelectShowAddTodoModal = () =>
  createSelector(selectHome, substate => {
    return substate.showTodoModal;
  });
const makeSelectShowNewTodoTitle = () =>
  createSelector(selectHome, substate => {
    return substate.newTodoTitle;
  });
const makeSelectShowNewTodoContent = () =>
  createSelector(selectHome, substate => {
    return substate.newTodoContent;
  });
const makeSelectShowAddNewTodoDate = () =>
  createSelector(selectHome, substate => {
    return substate.newTodoDate;
  });

export { selectHome, makeSelectShowAddTodoModal,
  makeSelectShowNewTodoTitle,
  makeSelectShowNewTodoContent,
  makeSelectShowAddNewTodoDate };
