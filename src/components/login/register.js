import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { registerUser } from '../../actions/register_action';
import { Button, Icon, message } from 'antd'

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerError = this.registerError.bind(this);
    }
    registerError = () => {
        message.error(this.props.error, 5);
      };
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.registerUser(this.state)
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
        return (
            <div>
               <form onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="flex-container-column">
                    <input type="text" name="username"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(e) => this.handleChange(e)} required /><br />
                    <input type="email" name="email"
                       placeholder="Email Address"
                      value={this.state.email}
                      onChange={(e) => this.handleChange(e)} required /><br />
                    <input type="password" name="password"
                       placeholder="Password"
                      value={this.state.password}
                      onChange={(e) => this.handleChange(e)} required /><br />
                    <Button type="primary" loading={this.props.isRegistering} htmlType="submit" >Register</Button>
                  </div>
                </form>
                {this.props.error && this.registerError()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isRegistering: state.registerReducer.isRegistering,
        error: state.registerReducer.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerUser
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register);