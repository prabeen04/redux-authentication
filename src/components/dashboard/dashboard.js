import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Protected from '../protected/protected';

class Dashboard extends Component {
    constructor(props){
        super(props)
    console.log(this.props)
    }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
        <Link to="/protected">Home</Link>
        <Switch>
          <PrivateRoute exact to="/protected" component={Protected}/>
        </Switch>
      </div>
    )
  }
}

export default Dashboard;