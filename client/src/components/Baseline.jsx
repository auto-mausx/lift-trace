import React from 'react';
import BaselineDisaply from './BaselineDisplay';
import BaselineDisplay from './BaselineDisplay';

const Baseline = () => {
  return (
    <div>
      <span>Update Baselines:</span>
      <form>
        <input type='text' id='baselineLift' placeholder='Input your lift here'></input>
        <input type='text' id='baselineWeight' placeholder='Input your current max weight here'></input>
        <select>
          <option value='lbs'>lbs</option>
          <option value='kgs'>kgs</option>
        </select>
        <button type="submit" id='submitBaseline'>Set Baseline</button>
      </form>
      <BaselineDisplay />
    </div>
  )
}

export default Baseline;