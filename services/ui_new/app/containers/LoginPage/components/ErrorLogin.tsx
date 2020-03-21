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
  return <AlertError></AlertError>;
}

export default ErrorContainer;
