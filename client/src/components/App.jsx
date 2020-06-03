import React, { Component } from 'react';
import axios from 'axios';
import Baseline from './Baseline.jsx';
import Goal from './Goal';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baselines: [],
      goals: []
    };
    this.setBaseline = this.setBaseline.bind(this);
    this.setGoal = this.setGoal.bind(this);
    this.deleteBaseline = this.deleteBaseline.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
  }
  // gets both goals and baselines on page load
  componentDidMount() {
    this.getBaselines();
    this.getGoals();
  }
  // gets baselines from DB
  getBaselines() {
    axios.get('/baselines')
    .then(res => {
      const baselines = res.data;
      this.setState({baselines})
    })
    .catch(err => {
      console.log('could not get baselines', err)
    })
  }
  // gets goals from DB
  getGoals() {
    axios.get('/goals')
    .then(res => {
      const goals = res.data;
      this.setState({goals})
    })
    .catch(err => {
      console.log('could not get goals', err)
    })
  }
  // sets a new baseline
  setBaseline(lift, weight, unit, reps) {
    var baseline = {
      lift: lift,
      weight: weight + ' ' + unit,
      reps: reps
    }
    axios.post('/baseline', {baseline})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('could not set baseline', err)
    })
  }
  // sets a new goal
  setGoal(lift, weight, unit, reps) {
    var goal = {
      lift: lift,
      weight: weight + ' ' + unit,
      reps: reps
    }
    axios.post('/goal', {goal})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('could not set goal', err)
    })
  }
  // deletes a baseline
  deleteBaseline(lift) {
    axios.delete('/baseline', {data: lift} )
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('could not delete baseline', err)
    })
  }
  // deletes a goal
  deleteGoal(lift) {
    axios.delete('/goal', {data: lift} )
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('could not delete goal', err)
    })
  }


  render() {
    return(
      <div>
        <h1>{this.state.lift}</h1>
        <Baseline />
        <Goal />
      </div>
    )
  }
}