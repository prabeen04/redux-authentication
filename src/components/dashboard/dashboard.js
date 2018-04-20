import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import PrivateRoute from '../auth/authentication'
import Protected from '../protected/protected';
import Private from '../private/private';
import Settings from '../settings/settings';
import NotFound from '../notfound/notfound';
import { Layout, Menu, Icon, Button } from 'antd';
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
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
    // return (
    //   <div>
    //     <h1>Dashboard Component</h1>
    //     <Button type="primary">Button</Button>
    //     <Link to='/protected'>protected</Link>
    //     <Link to='/settings'>Settings</Link>
    //     <Switch>
    //       <Route exact path="/" component={Private} />
    //       <Route exact path="/protected" component={Protected} />
    //       <Route exact path="/settings" component={Settings} />
    //       <Route exact path="*" component={NotFound} />
    //     </Switch>
    //   </div>
    // )
  }
}

export default withRouter(Dashboard);