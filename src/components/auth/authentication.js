import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('token') ? <Component {...props} /> : <Redirect to="/login" />

        }
    />
);

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.sessionReducer.isLoggedIn,
        token: state.sessionReducer.token || JSON.stringify(localStorage.getItem('token'))
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));