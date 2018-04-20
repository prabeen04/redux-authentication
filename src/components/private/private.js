import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';


class Private extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
    render() {
    return (
      <div>
        <h1>Private Component</h1>
      </div>
    )
  }
}

export default withRouter(Private);
