import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { BackTop, Button } from 'antd';
import { logoutUser } from '../../actions/logout_action';
import './private.css';

class Private extends Component {
  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }
  handleLogout = () => {
    this.props.logoutUser(this.props.history);
  }
  render() {
    if (!this.props.isLoggedIn) {
      this.props.history.push('/login')
    }
    return (
      <div className="private-wrapper">
        <Button
          style={{ float: 'right' }}
          type="primary"
          onClick={this.handleLogout}>Logout</Button>
        <h1>Private Component</h1>
        <BackTop />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Private));
