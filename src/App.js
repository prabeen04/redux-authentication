import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser } from './actions/user_login'
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.loginUser()
  }
  render() {
    return (
      <div>
       { this.props.isLoggedIn
       ?<h1>App Component</h1>
      : <h2>you are not logged in...</h2>}
      </div>
    );
  }
}

const mapStateToProps =(state, ownProps) => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
