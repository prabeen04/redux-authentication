import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter} from 'react-router-dom';
import { BackTop, Button } from 'antd';
import { logoutUser } from '../../actions/logout_action';
import './private.css';

class Private extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
    render() {
    return (
      <div className="private-wrapper">
        <Button 
            style={{float: 'right'}}
            type="primary"
            onClick={()=>this.props.logoutUser()}>Logout</Button>
        <h1>Private Component</h1>
        <BackTop/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logoutUser
  }, dispatch)
}
export default withRouter(connect(null, mapDispatchToProps)(Private));
