import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchArticle } from '../reduxes/action'

import '../styles/Sidebar.css'



class Sidebar extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentWillMount () {
    this.props.getStat()
  }
  render () {
    console.log();
    return (
      <div>Sidebar</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => dispatch(fetchArticle()),
  }
}

const Conn = connect(null, mapDispatchToProps)(Sidebar)
export default Conn
