import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from 'history';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser } from './actions/user_login';
import Dashboard from './components/dashboard/dashboard'
import Login from './components/login/login'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={Dashboard}/>
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
