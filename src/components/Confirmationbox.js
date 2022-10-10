import React from 'react'
import './confirmation.scss'

import  { useState } from "react"


export default function Confirmationbox() {
    const [delTask, setDelTask] = useState(false);
    const handleConfirmationBox = () => {
        if (!delTask) {
          document.querySelector(".confirm-bg").style.display = "flex"
          document.querySelector(".container").style.display = "flex"
          setDelTask(true)
        } else {
          document.querySelector(".confirm-bg").style.display = "none"
          document.querySelector(".container").style.display = "none"
          setDelTask(false)
      }
    }
      
    
    
    return (
    <>
    <div className="container">
      <div className="confirmation-text">
        Do you really want to delete this task?
      </div>
      <div className="button-container">
        <button 
          className="cancel-button" 
          onClick={() => handleConfirmationBox()}>
            Cancel
        </button>
        <button 
          className="confirmation-button"
          onClick={handleDeleteTask}>
            Delete
          </button>
      </div>
    </div>
    <div 
      className="confirm-bg">
      onClick={() => handleConfirmationBox()}
    </div>
  </>
  )
}
