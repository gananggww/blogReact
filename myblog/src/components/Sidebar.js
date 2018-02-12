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
  render () {
    console.log();
    return (
      <div>Sidebar</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: payload => dispatch(fetchArticle(payload)),
  }
}

const Conn = connect(null, null)(Sidebar)
export default Conn
