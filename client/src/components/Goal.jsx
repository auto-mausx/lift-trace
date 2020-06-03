import React from 'react';
import GoalDisplay from './GoalDisplay';

const Goal = () => {
  return (
    <div>
      <span>Set New Goal:</span>
      <form>
        <input type='text' id='goalLift' placeholder='Input your lift here'></input>
        <input type='text' id='goalWeight' placeholder='Input your goal weight here'></input>
        <select>
          <option value='lbs'>lbs</option>
          <option value='kgs'>kgs</option>
        </select>
        <input type='text' id='goalReps' placeholder='Input rep range'></input>
        <button type="submit" id='submitGoal'>Set Goal</button>
      </form>
      <GoalDisplay />
    </div>
  )
}

export default Goal;