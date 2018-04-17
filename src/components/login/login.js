import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
         <h1>login commponent</h1>
         <button onClick={()=>this.props.loginUser}>Login</button>
      </div>
    )
  }
}

export default Login;