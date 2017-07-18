import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    this.state = {
      count: 0;
    }
  }
  render() {
    return (
      <h1>{this.state.count}</h1>
    )
  }
}
