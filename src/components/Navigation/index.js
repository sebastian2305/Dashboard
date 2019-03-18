import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavDropdown, FormControl,Form } from 'react-bootstrap'
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);


const NavigationAuth = () => (
  <div>
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Colombia Viva</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
          <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
          <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
        <NavDropdown title="App" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Android</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">iOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Bussiness</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Preguntas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <SignOutButton />
      </Form>
    </Navbar.Collapse>
  </Navbar>
  </div>
);

const NavigationNonAuth = () => (
  <div>
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Colombia Viva</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Home</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">iOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Android</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Bussiness</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Questions</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <Button className="mr-2" href={ROUTES.SIGN_IN} variant="outline-success">Sign In</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  </div>
);
export default Navigation;
