import React from 'react'
import { connect } from 'react-redux'

const Authentication = (WrappedComponent) => {
    return class WithAuthentication extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            return <WrappedComponent isLoggedIn={this.props.isLoggedIn} {...this.props} />
        }
    }
}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.sessionReducer.isLoggedIn
    }
}
export default connect(mapStateToProps)(Authentication);