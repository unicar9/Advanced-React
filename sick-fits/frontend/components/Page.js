import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/meta'

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
