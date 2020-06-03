import React from 'react';

const GoalDisplay = (props) => {
  return (
    <div>
      <span>
        Your Current goals:
      </span>
      <ul>
        <li>Lift @ weight for X reps</li>
        <li>Next Lift @ weight for X reps</li>
        <li>Another Lift @ weight for X reps</li>
      </ul>
    </div>
  )
}

export default GoalDisplay;