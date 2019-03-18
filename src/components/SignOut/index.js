import React from 'react';
import { Button, Navbar, Nav, NavDropdown, FormControl,Form } from 'react-bootstrap'
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (

  <Button type="button" variant="outline-success" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
