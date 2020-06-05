import React from 'react';
import BaselineItem from './BaselineItem';

const BaselineDisplay = (props) => {
  return (
    <div className='baselineDisp'>
      <span className='currBest'>
        Your Current Bests:
      </span>
      <ul className='baselineList'>
        {props.baselines.map(liftdata => {
          return (
            <BaselineItem lift={liftdata.lift} weight={liftdata.weight}
            reps={liftdata.reps}
            onRemove={(e) => props.delete(e, liftdata.lift)}
            show={(e) => props.show(e, liftdata.lift, liftdata.weight, liftdata.reps)}
            />
          )
        })}
      </ul>
      <div className='clickNotification'>
        Click on a lift above to display next weeks goal!
      </div>
    </div>
  )
}

export default BaselineDisplay;