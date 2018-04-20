import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isLoggedIn === true ? (
                <Component {...props} />
            ) : (
                  <Redirect to="/login" />
                )
        }
    />
);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.sessionReducer.isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps, null, null, {pure: false})(PrivateRoute));