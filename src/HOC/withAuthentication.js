
// Authentication HOC
const Authentication = (WrappedComponent) =>{
  return class WithAuthentication extends React.Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: 'prabeen'
        }
      }
    }
    render() {
      const { role } = this.state.user
      if (this.state.user) {
        return <WrappedComponent user={this.state.user} {...this.props} />
      } else {
        return <h1>You are Not Authenticated...</h1>
      }
    }
  }
}
export default Authentication(YourRoute, ['manager', 'admin'])