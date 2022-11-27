import React from 'react'

const ProgressBar = ({bgcolor,progress}) => {
    
    const wraper_progress = {
      height: '100%',
      width: `${progress}%`,
      backgroundColor: bgcolor,
      borderRadius:40,
      textAlign: 'center'
    }
      
  return (
    <div className="progress-bar" style={wraper_progress}>{`${progress}%`}</div>
  )
}

export default ProgressBar;