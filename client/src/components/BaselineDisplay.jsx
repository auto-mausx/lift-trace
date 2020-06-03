import React from 'react';

const BaselineDisplay = (props) => {
  return (
    <div>
      <span>
        Your Current Bests:
      </span>
      <ul>
        <li>Lift @ weight for X reps</li>
        <li>Next Lift @ weight for X reps</li>
        <li>Another Lift @ weight for X reps</li>
      </ul>
    </div>
  )
}

export default BaselineDisplay;