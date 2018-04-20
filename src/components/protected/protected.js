import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class Protected extends Component {
  render() {
    return (
      <div>
        <h1>Protected Route</h1>
        <Link to="/">home</Link>
      </div>
    )
  }
}

export default withRouter(Protected);