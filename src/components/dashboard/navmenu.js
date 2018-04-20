
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class NavMenu extends React.Component {
    state = {
        collapsed: false,
    }
    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to='/'>
                            <Icon type="appstore" />
                            <span>DashBoard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/calendar'>
                            <Icon type="calendar" />
                            <span>Calendar</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/profile'>
                            <Icon type="profile" />
                            <span>Profile</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/post'>
                            <Icon type="medium" />
                            <span>Post</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="pie-chart" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">Option 9</Menu.Item>
                        <Menu.Item key="6">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 11</Menu.Item>
                            <Menu.Item key="8">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default NavMenu;