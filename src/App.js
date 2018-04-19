import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import PrivateRoute from './components/auth/authentication';
import Dashboard from './components/dashboard/dashboard';
import Protected from './components/protected/protected';
import Private from './components/private/private';
import Login from './components/login/login';
import NotFound from './components/notfound/notfound';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       { this.props.isLoggedIn && <div>
         <Link to="/protected">Protected</Link>
        <Link to="/private">Private</Link>
        </div>}
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/protected" component={Protected} />
          <PrivateRoute exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      isLoggedIn: state.sessionReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(App);