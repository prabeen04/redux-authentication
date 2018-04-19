import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/auth/authentication';
import Dashboard from './components/dashboard/dashboard';
import Protected from './components/protected/protected';
import Login from './components/login/login';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/protected" component={Protected} />
        </Switch>

      </div>
    );
  }
}

export default App
