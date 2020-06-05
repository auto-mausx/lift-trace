import React from 'react';


const BaselineItem = ({lift, weight, reps, onRemove, show}) => {
  return (
    <div className='baselineListGroup'>
      <li className='baseItem' onClick={show} >{lift} at {weight} for {reps} reps</li><button className='baselineDel' onClick={onRemove}>X</button>
    </div>
  )
};


export default BaselineItem;