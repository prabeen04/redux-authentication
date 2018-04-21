import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { BackTop } from 'antd';
import './private.css';

class Private extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
    render() {
    return (
      <div className="private-wrapper">
        <h1>Private Component</h1>
        <BackTop/>
      </div>
    )
  }
}

export default withRouter(Private);
