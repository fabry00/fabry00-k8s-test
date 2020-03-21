/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginError } from './actions';
import ActionTypes from './constants';

import request from 'utils/request';
import { makeSelectUsername, makeSelectPassword } from 'containers/LoginPage/selectors';

export function* loginUser() {
  console.log("URL",process.env.API_URL);

  // ** IMPORTANT **
  //Injected by webpack:
  // Check the file internal/webpack/webpack.base.babel.js
  // and pacakge.json start task
  // in prod default value will be used (injectect by webpack)
  const url = process.env.API_URL;

  // Select username and password from store
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());

  const requestURL = `${url}/authenticate`;

  try {
    // Call our request helper (see 'utils/request')
    const opts: RequestInit = {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *client
      body: JSON.stringify({ username, password }) // body data type must match "Content-Type" header
    };
    const user = yield call(request, requestURL, opts);
    yield put(loginSuccess(user));
  } catch (err) {
    yield put(loginError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* doLogin() {
  // Watches for LOGIN_USER actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.LOGIN_USER, loginUser);
}
