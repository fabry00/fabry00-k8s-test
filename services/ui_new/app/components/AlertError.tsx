import * as React from 'react';
import styled from 'styles/styled-components';

const AlertDiv = styled.div``;
export interface Props {
  message: string;
}
function AlertError(props: Props) {
  return (
    <AlertDiv className="alert alert-danger" role="alert">
      {props.message}
    </AlertDiv>
  );
}

export default AlertError;
