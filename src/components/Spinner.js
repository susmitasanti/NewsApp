import React, { Component } from 'react'
import loading from '../loading.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div align="center">
        <img src={loading} alt="Loading..."></img>
      </div>
    )
  }
}
