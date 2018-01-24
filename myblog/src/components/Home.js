import React, { Component } from 'react';
import Container from './container/Container.js'

import Header from './Header.js'
import Footer from './Footer.js'
import Sidebar from './Sidebar.js'

import '../styles/Home.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        <Header />
        <div className="containerSidebar">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="container">
            <Container />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
