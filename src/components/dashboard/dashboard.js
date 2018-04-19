import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Protected from '../protected/protected';
import Private from '../private/private';
import NotFound from '../notfound/notfound';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
        {/* <Link to="/protected">Protected</Link>
        <Link to="/private">Private</Link> */}

        <Switch>
          <Route path="/private" component={Private}/>
          <Route path="/protected" component={Protected}/>
          <Route path="*" component={NotFound} />
        </Switch>  

      </div>
    )
  }
}

export default Dashboard;