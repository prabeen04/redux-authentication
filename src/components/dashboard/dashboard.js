import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Authorization from '../../HOC/withAuthorization';
import Protected from '../protected/protected';
import Private from '../private/private';
import Settings from '../settings/settings';
import NotFound from '../notfound/notfound';
import NavMenu from './navmenu';
import './dashboard.css';
import { Layout, Menu, Icon, Button, Badge } from 'antd';
const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      collapsed: false
    }

    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className="logo" >
          </div>
          <NavMenu
            collapsed={this.state.collapsed}
            toggleCollapsed={this.toggle} />

        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>

          <Content>
            <Switch>
              <Route exact path="/" component={Private} />
              <Route exact path="/protected" component={Authorization(Protected, ['manager', 'admin'])} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Dashboard);