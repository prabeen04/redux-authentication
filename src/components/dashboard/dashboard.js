import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Protected from '../protected/protected';
import Private from '../private/private';
import Settings from '../settings/settings';
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
        <Link to='/protected'>protected</Link>
        <Link to='/settings'>Settings</Link>
        <Switch>
          <Route exact path="/" component={Private} />
          <Route  path="/protected" component={Protected} />
          <Route  path="/settings" component={Settings} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Dashboard);