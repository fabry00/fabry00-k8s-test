import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export interface Props {
  handleShowAddTodoModal(): void;
  handleDeleteAll(): void;
  totalTodos: number;
}

function AddTodoRow(props: Props) {
  console.log('AddTodo');
  return (
    <div>
      <Row>
        <Col>Total todos: {props.totalTodos} </Col>
        <Col className="text-right">
          <ButtonGroup aria-label="Basic example">
            <Button onClick={props.handleDeleteAll} variant="danger">! Delete All !</Button>
            <Button onClick={props.handleShowAddTodoModal} variant="success">+ Add</Button>
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col><hr></hr></Col>
      </Row>
    </div>
  );
}

export default AddTodoRow;
