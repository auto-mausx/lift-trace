import React from 'react';


const GoalItem = ({lift, weight, reps, onRemove}) => {
  return (
    <div>
      <li>{lift} at {weight} for {reps} reps</li><button onClick={onRemove}>X</button>
    </div>
  )
};


export default GoalItem;