import React from 'react'
import { useState } from 'react'
import './AdvancedJobCounter.css'

const AdvancedJobCounter = () => {
  // useState hook to manage the job counter state
  const [jobCounter, setJobCounter] = useState(0);
  // Add a new state variable to track the environment (e.g., "Production" and "UAT") 
  const [environment, setEnvironment] = useState("Production");

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

  // Implement a toggle button to switch between environments 
  const toggleEnvEvent = () => {
    setEnvironment(environment === "Production" ? "UAT" : "Production");
  }
  
  // Displays different messages based on the job count
  const message = jobCounter === 0 ? "No jobs available" : 
            jobCounter >= 1 && jobCounter <= 5 ? "Few jobs available" :
            jobCounter > 5 ? "Many jobs available" :
            "No jobs available";

  return (
    <div className="container">
      <h1>Advanced Job Counter</h1>
      {/* Displays current job count */}
      <p>Current jobs running: {jobCounter}</p>

      {/* Display the current environment along with the job count */}
      <p>Jobs running in {environment}: {environment === "UAT" ? jobCounter - 5 : jobCounter}</p>
      <div className="form-group">
        <button className="environment" onClick={toggleEnvEvent}>Change to {environment}</button> 
      </div>

      {/* Added buttons for each action */}
      <div className="form-group">
        <button className="add" onClick={handleAddEvent}>Add a job</button>
      </div>
      <div className="form-group">
        <button className="remove" onClick={handleSubEvent}>Remove a job</button>
      </div>
      <div className="form-group">
        <button className="reset" onClick={handleResetEvent}>Reset</button>
      </div>

      {/* Displays diffenent messages based on the job count */}
      <p className="message">{message}</p>
    </div>
  )
}

export default AdvancedJobCounter
