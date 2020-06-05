import React from 'react';


const GoalItem = ({lift, weight, reps, onRemove}) => {
  return (
    <div className='goalListDisp'>
      <li className='goalListItem'>{lift} at {weight} for {reps} reps</li><button className='goalDel' onClick={onRemove}>X</button>
    </div>
  )
};


export default GoalItem;