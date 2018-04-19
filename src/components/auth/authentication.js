import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        props.isLoggedIn 
        ? <Component {...props} />
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  const mapStateToProps = (state) => {
      return{
          isLoggedIn: state.sessionReducer.isLoggedIn
      }
  }

  export default connect(mapStateToProps)(PrivateRoute);