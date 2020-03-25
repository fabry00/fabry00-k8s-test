/**
 * Gets the repositories of the user from Github
 */
import moment from 'moment';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { saveNewTodo } from './actions';
import ActionTypes from './constants';

import request from 'utils/request';
import {
  makeSelectShowNewTodoTitle,
  makeSelectShowNewTodoContent,
  makeSelectShowAddNewTodoDate
} from './selectors';
import { showLoading, loadTodos } from 'containers/App/actions';
import { push } from 'connected-react-router';
import { Todo } from 'containers/App/types';
import { makeSelectJwt } from 'containers/App/selectors';

export function* addTodo() {
  console.log("URL", process.env.API_URL);

  yield put(showLoading(true));

  // ** IMPORTANT **
  //Injected by webpack:
  // Check the file internal/webpack/webpack.base.babel.js
  // and pacakge.json start task
  // in prod default value will be used (injectect by webpack)
  const url = process.env.API_URL;
  const jwt = yield select(makeSelectJwt());
  // Select username and password from store
  const date = yield select(makeSelectShowAddNewTodoDate());
  const todo: Todo = {
    title: yield select(makeSelectShowNewTodoTitle()),
    content: yield select(makeSelectShowNewTodoContent()),
    created: moment.now(),
    expiration: moment(date, "DD/MM/YYYY").unix(),
  };
  const requestURL = `${url}/todos`;
  console.log("New Todo:", todo)
  try {
    // Call our request helper (see 'utils/request')
    const opts: RequestInit = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(todo) // body data type must match "Content-Type" header
    };
    yield call(request, requestURL, opts);
  } catch (err) {
    //yield put(loginError());
  }
  yield put(loadTodos());
  yield put(showLoading(false));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* doSaga() {
  // Watches for LOGIN_USER actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.SAVE_NEW_TODO, addTodo);
}
