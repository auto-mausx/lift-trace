import React from 'react';
import GoalDisplay from './GoalDisplay';

const Goal = (props) => {
  return (
    <div>
      <span>Set New Goal:</span>
      <form onSubmit={props.setGoal}>
        <input type='text' id='goalLift' placeholder='Input your lift here' name='goalLift'></input>
        <input type='text' id='goalWeight' placeholder='Input your goal weight here' name='goalWeight'></input>
        <select name='goalUnit'>
          <option value='lbs'>lbs</option>
          <option value='kgs'>kgs</option>
        </select>
        <input type='text' id='goalReps' placeholder='Input rep range' name='goalReps'></input>
        <button type="submit" id='submitGoal'>Set Goal</button>
      </form>
      <GoalDisplay delete={props.delete} goals={props.goals} />
    </div>
  )
}

export default Goal;