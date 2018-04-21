import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/auth/authentication';
import Dashboard from './components/dashboard/dashboard';
import CompleteRegistration from './components/complete_registration/complete_registration';
import Login from './components/login/login';
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
          <Route exact path="/completeRegistration" component={CompleteRegistration} />
          <PrivateRoute  path="/" component={Dashboard} />
       </Switch>   
      </div> 
    );
  }
}

export default App;
