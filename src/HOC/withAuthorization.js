import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { Alert, message } from 'antd';

// Authorization HOC
const Authorization = (WrappedComponent, allowedRoles) =>{
    class WithAuthorization extends React.Component {
        constructor(props) {
          super(props)
          this.state = {
            user: {
              role: 'admin1'
            }
          }
          this.unauthorizedMessage = this.unauthorizedMessage.bind(this);
        }
       unauthorizedMessage = () => message.error('You are Unauthorized to view this page !!!');
        render() {
          const { role } = this.state.user
          if (allowedRoles.includes(role)) {
            return <WrappedComponent {...this.props} />
          } else {
            console.log('not authorized');
            this.unauthorizedMessage();
            <Alert
              message="Error"
              description="This is an error message about copywriting."
              type="error"
              showIcon
              closable
            />
            return <Redirect to='/'/>
          }
        }
      }
      return WithAuthorization;
}
  
export default Authorization;