import React, { Component } from 'react';
import axios from 'axios';
import Baseline from './Baseline.jsx';
import Goal from './Goal';
import NextDisplay from './NextDisplay';
import { json } from 'body-parser';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      baselines: [],
      goals: [],
      nextGoal: '',
    };
    this.setBaseline = this.setBaseline.bind(this);
    this.setGoal = this.setGoal.bind(this);
    this.deleteBaseline = this.deleteBaseline.bind(this);
    this.deleteGoal = this.deleteGoal.bind(this);
    this.showNextGoal = this.showNextGoal.bind(this);
    this.updateBaseline = this.updateBaseline.bind(this);
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

  // handles displaying the next goal
  showNextGoal(e, lift, weight, reps) {
    // filters goal array to compare with current value of weight
    var filteredGoalWeight = this.state.goals.filter(liftGoal => {
      if (liftGoal.lift === lift) {
        return liftGoal;
      }
    })

    e.preventDefault();
    // isolates the number and turns it into an actual number
    var num        = parseInt(weight.replace(/[^0-9]/g,''));
    // isolates the unit for later
    var unit       = weight.replace(/[^a-z]/g,'');
    var nextReps   = parseInt(reps) + 2;
    var completedGoalString = `CONGRATS! You've reached your targeted goal of ${weight} for ${reps} reps on ${lift}! Time to set a new goal!`

    // turns the goal object into a weight number
    filteredGoalWeight = parseInt(filteredGoalWeight[0].weight.replace(/[^0-9]/g,''))

    // if current weight is equal to the goal weight, show completed goal
    if (num === filteredGoalWeight) {
      this.setState({
        nextGoal: completedGoalString,
      }, () => {
        this.getBaselines();
      });

      // else display next goal and update the database with that goal
    } else {
      num += 5;
      var goalString = `Your next goal for ${lift} is ${num} or ${nextReps} reps at ${weight}`
      this.setState({
        nextGoal: goalString,
      }, () => {
        this.updateBaseline(lift, num, unit);
        this.getBaselines();
      })
    }
  }

  // handles axios request for updating baselines
  updateBaseline(lift, weight, unit) {
    axios.put('/baseline', {
      lift: lift,
      weight: weight + ' ' + unit
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      if (err) {
        console.log('could not update DB', err)
      }
    })
  }


  render() {
    if (this.state.baselines.length === 0 && this.state.goals.length === 0) {
      return null;
    }
    return(
      <div className='entireApp'>
        <div className='gainsTrain'>Lift Trace</div>
        <Baseline
        setBaseline={this.setBaseline}
        baselines={this.state.baselines}
        delete={this.deleteBaseline}
        show={this.showNextGoal}
        />

        <Goal
        setGoal={this.setGoal}
        goals={this.state.goals}
        delete={this.deleteGoal}
        />

        <NextDisplay
        next={this.state.nextGoal}
        />
      </div>
    )
  }
}
