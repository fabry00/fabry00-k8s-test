import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { Todo } from 'containers/App/types';
import TodoCard from './TodoCard';

export interface Props {
  onHandleDelete(id: number | undefined): void;
  todos: Todo[];
}

const orderList = (todos: Todo[]): Todo[] => {
  return Array.from(todos).sort((a, b) => a.expiration - b.expiration);
};

function TodosRow(props: Props) {
  console.log('TodosRow', props);
  const orderedTodos = orderList(props.todos);


  return (
    <>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            {orderedTodos.map((value, index) => {
              return (
                <TodoCard
                todo={value}
                index={index}
                key={index}
                onHandleDelete={props.onHandleDelete}
                ></TodoCard>
              );
            })}
          </Accordion>
        </Col>
      </Row>
    </>
  );
}

export default TodosRow;
