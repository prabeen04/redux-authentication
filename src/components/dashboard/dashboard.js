import React, { Component } from 'react'
import authentication from '../../HOC/withAuthentication'

class Dashboard extends Component {
    constructor(props){
        super(props)
    console.log(this.props)
    }

  render() {
    return (
      <div>
        <h1>Dashboard Component</h1>
      </div>
    )
  }
}

export default authentication(Dashboard);