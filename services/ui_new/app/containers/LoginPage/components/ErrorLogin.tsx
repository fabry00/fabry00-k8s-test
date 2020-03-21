import React from 'react';
import AlertError from 'components/AlertError';

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
      <AlertError
        message={"!! Wrong credentials !! Try again."}
      ></AlertError>
    </div>
  );
}

export default ErrorContainer;
