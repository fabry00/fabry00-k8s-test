import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styles/styled-components';

const Input = styled.input``;

const InputButton = styled.input`
  margin: 1em;
`;

export interface Props {
  show: boolean;
  handleClose(): void;
  handleSave(): void;
  newTodoTitle: string;
  onChangeNewTodoTitle(evt?: any): void;
  newTodoContent: string;
  onChangeNewTodoContent(evt?: any): void;
  newTodoDate: string;
  onChangeNewTodoDate(evt?: any): void;
}

function AddTodoModal(props: Props) {
  console.log('AddTodo');
  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="form-group">
              <label className="text-info">Title:</label>
              <br />
              <Input
                id="loginUsername"
                className="form-control"
                type="text"
                placeholder=""
                value={props.newTodoTitle}
                onChange={props.onChangeNewTodoTitle}
              />
            </div>
            <div className="form-group">
              <label className="text-info">Content:</label>
              <br />
              <Input
                className="form-control"
                type="text"
                placeholder=""
                value={props.newTodoContent}
                onChange={props.onChangeNewTodoContent}
              />
            </div>
            <div className="form-group">
              <label className="text-info">Expiration Date:</label>
              <br />
              <Input
                className="form-control"
                type="date"
                placeholder="DD/MM/YYYY"
                value={props.newTodoDate}
                onChange={props.onChangeNewTodoDate}
              />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleSave}>
            Save
          </Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTodoModal;
