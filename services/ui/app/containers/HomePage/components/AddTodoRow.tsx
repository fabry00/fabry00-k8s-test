import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export interface Props {
  handleShowAddTodoModal(): void;
}

function AddTodoRow(props: Props) {
  console.log('AddTodo');
  return (
    <div>
      <Row>
        <Col></Col>
        <Col className="text-right">
          <Button onClick={props.handleShowAddTodoModal} variant="success">+ Add</Button>
        </Col>
      </Row>
      <Row>
        <Col><hr></hr></Col>
      </Row>
    </div>
  );
}

export default AddTodoRow;
