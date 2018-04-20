import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import PrivateRoute from './components/auth/authentication';
import Dashboard from './components/dashboard/dashboard';
import Protected from './components/protected/protected';
import Private from './components/private/private';
import Login from './components/login/login';
import NotFound from './components/notfound/notfound';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <div>   
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute  path="/" component={Dashboard} />
       </Switch>   
      </div> 
    );
  }
}

export default App;
