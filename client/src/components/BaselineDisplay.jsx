import React from 'react';
import BaselineItem from './BaselineItem';

const BaselineDisplay = (props) => {
  return (
    <div>
      <span>
        Your Current Bests:
      </span>
      <ul>
        {props.baselines.map(liftdata => {
          return (
            <BaselineItem lift={liftdata.lift} weight={liftdata.weight} reps={liftdata.reps} onRemove={(e) => props.delete(e, liftdata.lift)}/>
          )
        })}
      </ul>
    </div>
  )
}

export default BaselineDisplay;