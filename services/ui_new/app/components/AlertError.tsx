import * as React from 'react';
import styled from 'styles/styled-components';

const AlertDiv = styled.div``;

function AlertError() {
  return (
    <AlertDiv className="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </AlertDiv>
  );
}

export default AlertError;
