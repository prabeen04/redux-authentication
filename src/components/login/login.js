import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import Register from './register';
import { loginUser } from '../../actions/user_login';
import './login.css';
import { Button, Icon, message, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginError = this.loginError.bind(this);
  }
  loginError = () => {
    message.error(this.props.error, 5);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state)
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name,'---', value);
    this.setState({
      [name]: value
    })
  }
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to='/' />
    }
    return (
      <div className="login-wrapper ">
        <div className="login-box flex-container" style={{alignItems: 'flex-start'}}>
          <Tabs
            defaultActiveKey="1"
            tabBarStyle={{ display: 'flex', justifyContent: 'center'}}>
            <TabPane tab={<span><Icon type="user" />Log In</span>} key="1">
              <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="flex-container-column">
                    <input type="email" name="email"
                       placeholder="Email Address"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e)} required /><br />
                    <input type="password" name="password"
                       placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => this.handleChange(e)} required /><br />
                    <Button type="primary" loading={this.props.loggingIn} htmlType="submit" >LOGIN</Button>
                  </div>
                </form>
                {this.props.error && this.loginError()}
              </div>
            </TabPane>
            <TabPane tab={<span><Icon type="user-add" />Register</span>} key="2">
              <Register/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn,
    loggingIn: state.sessionReducer.loggingIn,
    error: state.sessionReducer.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);