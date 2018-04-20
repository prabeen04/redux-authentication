import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/user_login'
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <h1>login commponent</h1>
          <button onClick={() => this.props.loginUser()}>Login</button>
        </div>
        <Link to="/">Dashboard</Link>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);