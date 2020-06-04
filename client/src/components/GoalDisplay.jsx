import React from 'react';
import GoalItem from './GoalItem';

const GoalDisplay = (props) => {
  return (
    <div>
      <span>
        Your Current goals:
      </span>
      <ul>
      {props.goals.map(liftdata => {
          return (
            <GoalItem lift={liftdata.lift} weight={liftdata.weight} reps={liftdata.reps} onRemove={(e) => props.delete(e, liftdata.lift)}/>
          )
        })}
      </ul>
    </div>
  )
}

export default GoalDisplay;