import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { loginUser } from './actions/user_login'
import './App.css';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.loginUser()
    }, 4000)

  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

 const Home = () => {
  return (
    <div>
      <h1>home commponent</h1>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <h1>login commponent</h1>
    </div>
  )
}
const About = () => {
  return (
    <div>
      <h1>About commponent</h1>
    </div>
  )
}