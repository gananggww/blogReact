import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../styles/Container.css'

class Container extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div>Container</div>
    )
  }
}

const Conn = connect(null, null)(Container)
export default Conn
