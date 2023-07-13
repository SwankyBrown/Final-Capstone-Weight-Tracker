import Tracking from '../Tracking'
import React, { useState } from 'react'


function WeightDisplay() {
    const [weight, setWeight] = useState("")
    const handleWeightChange = (event) => {
        setWeight(event.target.value)
    }


  return (
    <div>
        <input
        type="text"
        value={weight}
        onChange={handleWeightChange}
        />
        <h1>{weight}</h1>
        
    </div>
  )
}

export default WeightDisplay