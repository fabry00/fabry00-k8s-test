import React from 'react';
import './login.css';
import ErrorLogin from './ErrorLogin';
import FormLogin from './FormLogin';


export interface Props {
  username: string;
  password: string;
  error: boolean;
  onSubmitForm(): void;
  onReset(): void;
  onChangeUsername(evt?: any): void;
  onChangePassowrd(evt?: any): void;
}

function LoginContainer(props: Props) {
  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <FormLogin
                username={props.username}
                password={props.password}
                onChangeUsername={props.onChangeUsername}
                onChangePassowrd={props.onChangePassowrd}
                onSubmitForm={props.onSubmitForm}
                onReset={props.onReset}
              ></FormLogin>
            </div>
          </div>
          <ErrorLogin error={props.error}></ErrorLogin>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
