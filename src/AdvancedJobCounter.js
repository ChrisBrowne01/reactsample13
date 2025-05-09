import React from 'react'
import { useState } from 'react'

const AdvancedJobCounter = () => {
  const [jobCounter, setJobCounter] = useState(0);

  const handleAddEvent = () => {
    setJobCounter(jobCounter + 1);
  }
  const handleSubEvent = () => {
    setJobCounter(jobCounter - 1);
  }
    const handleResetEvent = () => {
    setJobCounter(0);
  }

  return (
    <div>
      <h1>Current job count is : {jobCounter}</h1>
      <button onClick={handleAddEvent}>Add a job</button>
      <button onClick={handleSubEvent}>Remove a job</button>
      <button onClick={handleResetEvent}>Reset</button>
    </div>
  )
}

export default AdvancedJobCounter
