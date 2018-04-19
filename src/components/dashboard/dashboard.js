import React, { Component } from 'react'

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

export default Dashboard;