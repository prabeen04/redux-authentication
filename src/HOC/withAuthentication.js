import React from 'react';
import {connect } from 'react-redux';

const withAuthentication = (Component) =>
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { authUser } = this.state;

      return (
          <Component />
      );
    }
    
  }

export default withAuthentication;