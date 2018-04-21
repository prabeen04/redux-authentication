import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/user_login'
import './login.css';
import { Button} from 'antd'

class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange =(e) => {
    console.log(e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,'---', value);
    this.setState({
      [name]: value
    })
  } 
  render() {
    return (
      <div className="login-wrapper ">
        <div className="login-box flex-container">

          <h3>login</h3>
          <div className="flex-container-column">
          <input type="text" name="email" onChange={(e)=>this.handleChange(e)}/><br/>
          <input type="password" name="password" onChange={(e)=>this.handleChange(e)}/><br/>
          <Button onClick={() =>{
            console.log(this.state.credentials)
             this.props.loginUser(this.state.credentials)}
             } type="primary">LOGIN</Button>
          </div>
          <Link to="/">Dashboard</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.sessionReducer.isLoggedIn
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginUser
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);