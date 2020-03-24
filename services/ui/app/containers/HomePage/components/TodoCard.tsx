import React from 'react';
import { Todo } from 'containers/App/types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Row from 'react-bootstrap/Row';

export interface Props {
  todo: Todo;
  index: number;
}

const toDate = (ts: number): string => {
  return moment.unix(ts).format('DD/MM/YYYY');
};

function TodoCard(props: Props) {
  console.log('TodoCard', props);

  const index: string = `${props.index}`;
  const expirationDate: string = toDate(props.todo.expiration);
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
          {expirationDate} | {props.todo.id} - {props.todo.title}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>{props.todo.content}</Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default TodoCard;
