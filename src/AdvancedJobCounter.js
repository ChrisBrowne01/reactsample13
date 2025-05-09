import React from 'react'
import { useState } from 'react'
import './AdvancedJobCounter.css'

const AdvancedJobCounter = () => {
  // useState hook to manage the job counter state
  const [jobCounter, setJobCounter] = useState(0);

  // Event handler for adding to the job counter
  const handleAddEvent = () => {
    setJobCounter(jobCounter + 1);
  }

  // Event handlers for subtracting from the job counter
  const handleSubEvent = () => {
    if (jobCounter > 0) { 
      setJobCounter(jobCounter - 1);
    }
  }
  
  // Event handler for resetting the job counter
  const handleResetEvent = () => {
    setJobCounter(0);
  }

  // Displays different messages based on the job count
  const message = jobCounter === 0 ? "No jobs available" : 
            jobCounter >= 1 && jobCounter <= 5 ? "Few jobs available" :
            jobCounter > 5 ? "Many jobs available" :
            "No jobs available";

  return (
    <div>
      <h1>Advanced Job Counter</h1>
      {/* Displays current job count */}
      <p>Current jobs: {jobCounter}</p>
      
      {/* Added buttons for each action */}
      <button onClick={handleAddEvent}>Add a job</button>
      <button onClick={handleSubEvent}>Remove a job</button>
      <button onClick={handleResetEvent}>Reset</button>

      {/* Displays diffenent messages based on the job count */}
      <p>{message}</p>
    </div>
  )
}

export default AdvancedJobCounter
