import Navbar from './components/Navbar';
import './App.css';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      // bcb7ffda785540c5881aa5787bafd6dc
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}
