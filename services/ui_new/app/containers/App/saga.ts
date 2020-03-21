/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import ActionTypes from './constants';
import request from 'utils/request';
import { makeSelectJwt, makeSelectUser } from './selectors';
import { loadTodosSuccess, loadTodosError } from './actions';


export function* loadTodos() {
  console.log("loadTodos", process.env.API_URL);

  // // ** IMPORTANT **
  // //Injected by webpack:
  // // Check the file internal/webpack/webpack.base.babel.js
  // // and pacakge.json start task
  // // in prod default value will be used (injectect by webpack)
  const url = process.env.API_URL;

  // // Select username and password from store
  const jwt = yield select(makeSelectJwt());
  const user = yield select(makeSelectUser());
  const requestURL = `${url}/todos/user/${user.id}`;

  try {
    //   // Call our request helper (see 'utils/request')
    const opts: RequestInit = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + jwt
      },
    };
    const response = yield call(request, requestURL, opts);
    yield put(loadTodosSuccess(response));
  } catch (err) {
    yield put(loadTodosError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* doLoadTodos() {
  // Watches for LOGIN_USER actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.LOAD_TODOS, loadTodos);
}
