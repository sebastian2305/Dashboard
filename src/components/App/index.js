import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';

import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HomePage from '../Home';
import LandingPage from '../Landing';
import V1Page from '../V1'
import V2Page from '../V2'
import V3Page from '../V3'
import V4Page from '../V4'
import V5Page from '../V5'
import V6Page from '../V6'
import V7Page from '../V7'
import V8Page from '../V8'

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
  this.listener = this.props.firebase.auth.onAuthStateChanged(
    authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    },
  );
}

 componentWillUnmount() {
   this.listener();
 }

  render() {
      return (

        <Router>
          <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <Navigation authUser={this.state.authUser} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.ADMIN} component={AdminPage} />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route exact path={ROUTES.V1} component={V1Page} />
              <Route exact path={ROUTES.V2} component={V2Page} />
              <Route exact path={ROUTES.V3} component={V3Page} />
              <Route exact path={ROUTES.V4} component={V4Page} />
              <Route exact path={ROUTES.V5} component={V5Page} />
              <Route exact path={ROUTES.V6} component={V6Page} />
              <Route exact path={ROUTES.V7} component={V7Page} />
              <Route exact path={ROUTES.V8} component={V8Page} />
          </div>
        </Router>
      );
    }
  }
export default withFirebase(App);
