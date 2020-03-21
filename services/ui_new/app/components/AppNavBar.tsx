import * as React from 'react';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export interface Props {
  currentPath: string;
  onLogout(): void;
}

function AppNavBar(props: Props) {
  console.log('AppNavBar:', props.currentPath);
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
          <Nav.Link onClick={props.onLogout}>Logout</Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  );
}

export default AppNavBar;
