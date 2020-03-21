import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectError,
  makeSelectUsername,
  makeSelectPassword,
} from './selectors';
import { changeUsername, changePassword, reset } from './actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import { loginUser } from './actions';
import saga from './saga';

import LoginContainer from './components/LoginContainer';
import { useInjectSaga } from 'utils/injectSaga';

const key = 'login';

const stateSelector = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  error: makeSelectError(),
});

export default function LoginPage() {
  const { username, password, error } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeUsername = (evt: any) => dispatch(changeUsername(evt.target.value));
  const onChangePassowrd = (evt: any) => dispatch(changePassword(evt.target.value));
  const onReset = () => dispatch(reset());

  const onSubmitForm = (evt?: any) => {
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
    if (!username || !password) {
      return;
    }
    dispatch(loginUser());
  };

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (
      username &&
      username.trim().length > 0 &&
      password &&
      password.trim().length > 0
    ) {
      onSubmitForm();
    }
  }, []);

  useInjectReducer({ key: key, reducer: reducer });
  useInjectSaga({ key: key, saga: saga });

  return (
    <div>
      <LoginContainer
        username={username}
        password={password}
        error={error || false}
        onChangeUsername={onChangeUsername}
        onChangePassowrd={onChangePassowrd}
        onSubmitForm={onSubmitForm}
        onReset={onReset}
      ></LoginContainer>
    </div>
  );
}
