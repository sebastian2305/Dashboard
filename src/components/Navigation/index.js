import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);


const NavigationAuth = () => (
  <div>
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href={ROUTES.LANDING}>Colombia Viva</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Home</Nav.Link>

        <NavDropdown title="Visualizaciones" id="basic-nav-dropdown">
          <NavDropdown.Item href={ROUTES.V1}>1.Información de Usuarios</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.V2}>2.Información de Parques</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.V3}>3.Información de Especies</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.V4}>4.Información de Reviews</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.V5}>5.Información de Uso de la app </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.V6}>6.Información de interacción con la app</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={ROUTES.HOME}>Preguntas</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href={ROUTES.HOME}>Gráficas</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN}>Administrador</Nav.Link>
        <Nav.Link href={ROUTES.ACCOUNT}>Ajustes</Nav.Link>
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
