import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { Info } from 'containers/App/types';
import moment from 'moment';

export interface Props {
  show: boolean;
  info: Info;
  handleClose(): void;
}

function HealthCheckModal(props: Props) {
  const now = moment().format('DD/MM/YYYY HH:mm:ss');
  return (
    <>
      <Modal size="lg" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>System Health Check</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Environment: {props.info.environment}<br/>
          Namespace: {props.info.podNamespace}<br/>
          Pod ID: {props.info.podId}<br/>
          Pod IP: {props.info.podIp}<br/>
          <hr></hr>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Status</th>
                <th>Version</th>
                <th>PodId</th>
                <th>Fetched</th>
              </tr>
            </thead>
            <tbody>
              {props.info.health.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>
                      {value.status == 'DOWN' ? (
                        <Badge variant="danger">{value.status}</Badge>
                      ) : (
                        <Badge variant="secondary">{value.status}</Badge>
                      )}
                    </td>
                    <td>{value.version}</td>
                    <td>{value.podId}</td>
                    <td>{now}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default HealthCheckModal;
