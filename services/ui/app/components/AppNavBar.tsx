import * as React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import LoadingIndicator from './LoadingIndicator';

export interface Props {
  currentPath: string;
  onLogout(): void;
  handleShowHealth(): void;
  errorHealth: boolean;
}

function AppNavBar(props: Props) {
  console.log('AppNavBar:', props);
  const variant = props.errorHealth ? 'outline-danger':'outline-dark';
  return (
    <NavBar bg="info" expand="lg">
      <NavBar.Brand href="#home">MyApp</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href="#home"
            className={props.currentPath === '/home' ? 'active' : ''}
          >
            Home
          </Nav.Link>
          <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
          <Button variant={variant} onClick={props.handleShowHealth}>
            Health check
          </Button>
          <Nav.Link onClick={props.onLogout}>Logout</Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}

export default AppNavBar;
