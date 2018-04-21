import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { message } from 'antd';
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
            console.log('not authorized');
           () => message.error('Processing complete!');
            return <Redirect to='/'/>
          }
        }
      }
      return WithAuthorization;
}
  
export default Authorization;