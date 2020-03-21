import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

export interface Props {
  error: boolean;
}

function ErrorRow(props: Props) {
  console.log('ErrorRow', props);
  if (!props.error) {
    return null;
  }

  return (
    <Row>
      <Col>
        <Alert variant="danger">"!! Error !! Please try later."</Alert>
      </Col>
    </Row>
  );
}

export default ErrorRow;
