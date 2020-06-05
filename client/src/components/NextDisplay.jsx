import React from 'react';

const NextDisplay = (props) => {
  return (
    <div className='nextDisplay'>
      <p className='nextDisplayText'>{props.next}</p>
    </div>
  )
}

export default NextDisplay;