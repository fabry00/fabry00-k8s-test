import React from 'react';
import Alert from 'react-bootstrap/Alert';

export interface Props {
  error: boolean;
}

function ErrorContainer(props: Props) {
  console.log('ErrorContainer', props);
  if (!props.error) {
    return null;
  }
  return (
    <div className="col-md-6">
      <Alert variant="danger">
        "!! Wrong credentials !! Try again."
        </Alert>
    </div>
  );
}

export default ErrorContainer;
