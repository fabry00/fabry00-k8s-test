import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const showAddTodoModal = (show: boolean) => action(ActionTypes.SHOW_ADD_TODO_MODAL, show);
export const saveNewTodo = () => action(ActionTypes.SAVE_NEW_TODO);

export const changeNewTodoTitle = (text: string) => action(ActionTypes.CHANGE_TODO_TITLE, text);
export const changeNewTodoContent = (text: string) => action(ActionTypes.CHANGE_TODO_CONTENT, text);
export const changeNewTodoDate = (text: string) => action(ActionTypes.CHANGE_TODO_DATE, text);
