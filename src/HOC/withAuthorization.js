import React from 'react';
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
            return <h1>No page for you!</h1>
          }
        }
      }
      return WithAuthorization;
}
  
export default Authorization;