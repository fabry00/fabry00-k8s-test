import React from 'react';
import Form from 'components/Form';
import styled from 'styles/styled-components';

const Input = styled.input`

`;

const InputButton = styled.input`
  margin: 1em;
`;

export interface Props {
  username: string;
  password: string;
  onSubmitForm(): void;
  onChangeUsername(evt?: any): void;
  onChangePassowrd(evt?: any): void;
  onReset(): void;
}

function FormLogin(props: Props) {
  return (
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
        <InputButton
          type="reset"
          name="reset"
          className="btn btn-info btn-md"
          value="reset"
          onClick={props.onReset}
        />
        <InputButton
          type="submit"
          name="submit"
          className="btn btn-info btn-md"
          value="submit"
        />
      </div>
    </Form>
  );
}

export default FormLogin;
