import React, { Component } from 'react';
import '../styles/Header.css'


class Header extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render () {
    return (
      <div className="header">
        <div id="title">-</div>
        <input id="searchBar" type="text" name="search"/>
      </div>
    )
  }
}

export default Header
