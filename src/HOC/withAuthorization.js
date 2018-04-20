import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
// Authorization HOC
const Authorization = (WrappedComponent, allowedRoles) =>{
    class WithAuthorization extends React.Component {
        constructor(props) {
          super(props)
    
          // In this case the user is hardcoded, but it could be loaded from anywhere.
          // Redux, MobX, RxJS, Backbone...
          this.state = {
            user: {
              role: 'admin1'
            }
          }
        }
        render() {
          const { role } = this.state.user
          if (allowedRoles.includes(role)) {
            return <WrappedComponent {...this.props} />
          } else {
            return <Redirect to='/'/>
          }
        }
      }
      return WithAuthorization;
}
  
export default Authorization;