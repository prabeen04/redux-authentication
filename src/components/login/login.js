import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/user_login'
import './login.css';
import { Button} from 'antd'

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper ">
        <div className="login-box flex-container">

          <h3>login</h3>
          <div className="flex-container-column">
          <input type="text" name="email"/><br/>
          <input type="password" name="password"/><br/>
          <Button onClick={() => this.props.loginUser()} type="primary">LOGIN</Button>
          </div>
          <Link to="/">Dashboard</Link>
        </div>
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