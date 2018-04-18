
// Authentication HOC
const Authentication = (WrappedComponent, allowedRoles) =>{
  return class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: 'vcarl',
          role: 'admin'
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
}
export default Authentication(YourRoute, ['manager', 'admin'])