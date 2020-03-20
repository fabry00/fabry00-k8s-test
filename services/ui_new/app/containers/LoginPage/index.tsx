import React, { useEffect } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectError } from 'containers/App/selectors';
import { makeSelectUsername, makeSelectPassword } from './selectors';
import styled from 'styles/styled-components';
import { changeUsername, changePassword } from './actions';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';

const key = 'login';

const stateSelector = createStructuredSelector({
  username: makeSelectUsername(),
  password: makeSelectPassword(),
  //error: makeSelectError(),
});

const Input = styled.input``;
const Form = styled.form`
  margin-bottom: 1em;
`;

export default function LoginPage() {
  const { username, password } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onChangeUsername = (evt: any) => dispatch(changeUsername(evt.target.value));
  const onChangePassowrd = (evt: any) => dispatch(changePassword(evt.target.value));

  // const onSubmitForm = (evt?: any) => {
  //   if (evt !== undefined && evt.preventDefault) {
  //     evt.preventDefault();
  //   }
  //   if (!username || !password) {
  //     return;
  //   }
  //   alert('login');
  //   //dispatch(loadRepos());
  // };

  // useEffect(() => {
  //   // When initial state username is not null, submit the form to load repos
  //   if (username &&username.trim().length > 0 &&
  //     password && password.trim().length > 0) {
  //     onSubmitForm();
  //   }
  // }, []);

  useInjectReducer({ key: key, reducer: reducer });

  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form className="form" action="" method="post">
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label className="text-info">Username:</label>
                  <br />
                  <Input
                    id="loginUsername"
                    className="form-control"
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={onChangeUsername}
                  />
                </div>
                <div className="form-group">
                  <label className="text-info">Password:</label>
                  <br />
                  <Input
                    id="loginPassword"
                    className="form-control"
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={onChangePassowrd}
                  />
                </div>
                <div className="form-group text-right">
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
