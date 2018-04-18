import React from 'react'
import { connect } from 'react-redux'

// Authentication HOC
const Authentication = (WrappedComponent) =>{
  return class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
    }
    render() {
      if (this.state.user) {
        return <WrappedComponent isLoggedIn={this.props.isLoggedIn} {...this.props} />
      } else {
        return <h1>You are Not Authenticated...</h1>
      }
    }
  }
}
const mapStateToProps = (state) => {
    return{
        isLoggedIn: state.sessionReducer.isLoggedIn
    }
}
export default connect(mapStateToProps)(Authentication);