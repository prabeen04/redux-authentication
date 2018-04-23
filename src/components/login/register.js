import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Register extends Component {
  render() {
    return (
      <div>
        <h2>Register Component</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        registerUser
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Register);