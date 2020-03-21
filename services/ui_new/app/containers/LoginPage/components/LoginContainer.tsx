import React, { Children, ReactNode } from 'react';
import styled from 'styles/styled-components';
import './login.css';
import Form from 'components/Form';

const Input = styled.input``;


export interface Props {
  children?: ReactNode;
  username: string;
  password: string;
  onSubmitForm(): void;
  onChangeUsername(evt?: any): void;
  onChangePassowrd(evt?: any):void;
}

function LoginContainer(props: Props) {
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
              <Form className="form" onSubmit={props.onSubmitForm}>
                <h3 className="text-center text-info">Login</h3>
                <div className="form-group">
                  <label className="text-info">Username:</label>
                  <br />
                  <Input
                    id="loginUsername"
                    className="form-control"
                    type="text"
                    placeholder="username"
                    value={props.username}
                    onChange={props.onChangeUsername}
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
                    value={props.password}
                    onChange={props.onChangePassowrd}
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
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
