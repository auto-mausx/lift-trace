import React from 'react';
import BaselineDisaply from './BaselineDisplay';
import BaselineDisplay from './BaselineDisplay';

const Baseline = (props) => {
  return (
    <div>
      <span>Update Baselines:</span>
      <form onSubmit={props.setBaseline}>
        <input type='text' id='baselineLift' placeholder='Input your lift here' name='baselineLift' ></input>
        <input type='text' id='baselineWeight' placeholder='Input your current max weight here' name='baselineWeight' ></input>
        <select name='baselineUnit'>
          <option value='lbs'>lbs</option>
          <option value='kgs'>kgs</option>
        </select>
        <input type='text' id='baselineReps' placeholder='Input rep range' name='baselineReps' ></input>
        <button type="submit" id='submitBaseline'>Set Baseline</button>
      </form>
      <BaselineDisplay delete={props.delete} baselines={props.baselines}/>
    </div>
  )
}

export default Baseline;