import React, { useState } from 'react'

const Demo = () => {
    const [name, setName] = useState("Majid");
    const handleclick = () => {
        alert('clicked')
    }

    function handlesubmit(items) {
        alert(items)
    }

    function handleSubmit1() {
        setName("Shaikh")
    }
  return (
    <div>
          <button className='bg-yellow-500 p-4 '
          onClick={handleclick}>
              click me
          </button>
          
          <button className='bg-red-500 p-4 ml-3'
          onClick={ ()=>handlesubmit("Majid Please Clicked")}>
              click me
          </button>
          
          <h1>Event , function and state { name}</h1>
          <button onClick={handleSubmit1} className='bg-green-500 p-4 mt-2'>
              click me
          </button>
    </div>
  )
}

export default Demo
