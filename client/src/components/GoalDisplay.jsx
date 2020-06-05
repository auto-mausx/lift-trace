import React from 'react';
import GoalItem from './GoalItem';

const GoalDisplay = (props) => {
  return (
    <div className='goalDisp'>
      <span className='currentGoals'>
        Your Current goals:
      </span>
      <ul className='goalList'>
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