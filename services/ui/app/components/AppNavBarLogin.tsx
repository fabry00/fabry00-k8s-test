import * as React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export interface Props {
  handleShowHealth(): void;
  errorHealth: boolean;
}

function AppNavBarLogin(props: Props) {
  console.log('AppNavBarLogin:', props);
  const variant = props.errorHealth ? 'outline-danger':'outline-dark';
  return (
    <NavBar bg="info" expand="lg">
      <NavBar.Brand href="#home">MyApp</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav className="mr-sm-2">
          <Button variant={variant} onClick={props.handleShowHealth}>Health check</Button>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}

export default AppNavBarLogin;
