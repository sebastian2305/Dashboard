import {Navbar, Nav, NavItem, Button} from 'react-bootstrap';
import { withFirebase } from '../Firebase';

import React, {Component} from 'react';

class V8Page extends Component {
  constructor(props) {
       super(props);

       this.state = {
         isVisible: false,
       };
   }

   updateModal(isVisible) {
     	this.state.isVisible = isVisible;
       this.forceUpdate();
     }

  render() {
    const { users, loading , number} = this.state;
      return (
        <div>HOLAA</div>

    );
  }
}


export default withFirebase(V8Page);
