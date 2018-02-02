import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import Home from './components/Home.js'

import store from './reduxes/store/index.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
