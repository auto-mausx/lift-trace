import React, { Component } from 'react';
import axios from 'axios';
import Baseline from './Baseline.jsx';
import Goal from './Goal';
import NextDisplay from './NextDisplay';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baselines: [],
      goals: [],
      nextGoal: ''
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
  setBaseline(e) {
    e.preventDefault();
    var baseline = {
      lift: e.target.elements.baselineLift.value.toLowerCase(),
      weight: e.target.elements.baselineWeight.value + ' ' + e.target.baselineUnit.value,
      reps: e.target.elements.baselineReps.value
    }
    axios.post('/baseline', {baseline})
    .then(res => {
      console.log(res)
      this.getBaselines();
    })
    .catch(err => {
      console.log('could not set baseline', err)
      console.log(err.message)
    })
    e.target.baselineLift.value = '';
    e.target.baselineWeight.value = '';
    e.target.baselineReps.value = '';
  }
  // sets a new goal
  setGoal(e) {
    e.preventDefault();
    var goal = {
      lift: e.target.elements.goalLift.value.toLowerCase(),
      weight: e.target.elements.goalWeight.value + ' ' + e.target.goalUnit.value,
      reps: e.target.elements.goalReps.value
    }
    axios.post('/goal', {goal})
    .then(res => {
      console.log(res)
      this.getGoals();
    })
    .catch(err => {
      console.log('could not set goal', err)
    })
    e.target.goalLift.value = '';
    e.target.goalWeight.value = '';
    e.target.goalReps.value = '';
  }
  // deletes a baseline
  deleteBaseline(e, lift) {
    e.preventDefault();
    console.log(lift)
    axios.delete('/baseline', { data: { lift: lift } } )
    .then(res => {
      console.log(res)
      this.getBaselines()
    })
    .catch(err => {
      console.log('could not delete baseline', err)
    })
  }
  // deletes a goal
  deleteGoal(e, lift) {
    e.preventDefault();
    axios.delete('/goal', {data: {lift: lift}} )
    .then(res => {
      console.log(res)
      this.getGoals();
    })
    .catch(err => {
      console.log('could not delete goal', err)
    })
  }

  showNextGoal(lift, weight, reps) {
    var parsedWeight = Number(weight);
    var parsedReps   = Number(reps);
    var goalString = `Your next goal for ${lift} is ${parsed + 5} or ${parsedReps + 2} reps at ${weight}`
    this.setState({nextGoal: goalString}, console.log(this.state.nextGoal));
  }


  render() {
    if (this.state.baselines.length === 0 && this.state.goals.length === 0) {
      return null;
    }
    return(
      <div>
        <h1>{this.state.lift}</h1>
        <Baseline setBaseline={this.setBaseline} baselines={this.state.baselines} delete={this.deleteBaseline}/>
        <Goal setGoal={this.setGoal} goals={this.state.goals} delete={this.deleteGoal} />
        <NextDisplay />
      </div>
    )
  }
}