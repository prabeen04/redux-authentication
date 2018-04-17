import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from '../../actions/user_login'
class Login extends Component {
  render() {
    return (
      <div>
         <h1>login commponent</h1>
         <button onClick={()=>this.props.loginUser()}>Login</button>
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