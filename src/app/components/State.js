import React, { useState } from 'react'

const State = () => {
    const[name , setName] = useState("Majid")

    const handleSubmit = () => {
        setName("shaikh")
    }
  return (
    <div>
          <h1>Event , function and state { name}</h1>
          <button onClick={handleSubmit} className='bg-green-500 p-4 mt-2'>
              click me
          </button>
    </div>
  )
}

export default State
