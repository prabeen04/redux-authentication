import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Protected from '../protected/protected';
import Private from '../private/private';
import Settings from '../settings/settings';
import NotFound from '../notfound/notfound';
import { Button } from "antd";

class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
        <Button type="primary">Button</Button>
        <Link to='/protected'>protected</Link>
        <Link to='/settings'>Settings</Link>
        <Switch>
          <Route exact path="/" component={Private} />
          <Route exact path="/protected" component={Protected} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Dashboard);