import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/auth/authentication';
import Dashboard from './components/dashboard/dashboard';
import Protected from './components/protected/protected';
import Login from './components/login/login';
import NotFound from './components/notfound/notfound';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route exact path="/" component={Dashboard} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="**" component={NotFound} />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App
