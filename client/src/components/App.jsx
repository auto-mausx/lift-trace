import React, { Component } from 'react';
import axios from 'axios';
import Baseline from './Baseline.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lift: "Hello World!"
    };
  }

  render() {
    return(
      <div>
        <h1>{this.state.lift}</h1>
        <Baseline />
      </div>
    )
  }
}