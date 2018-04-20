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
    if (this.props.title !== undefined) {
      return (
        <div className="listTitle">
        {
          this.props.title.map(item => {
            return (<div className="haihai">{item}</div>)
          })
        }
        </div>
      )
    } else {
      return <div></div>
    }

  }
}

const mapStateToProps = state => {
  if (state.articles.length > 0) {
    return {
      title: state.articles
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getStat: () => dispatch(fetchArticle()),
  }
}

const conn = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default conn
