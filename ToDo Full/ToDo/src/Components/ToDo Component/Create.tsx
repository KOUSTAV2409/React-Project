import React, { useState } from 'react'
import axios from "axios"

const Create = () => {

  const [task, setTask] = useState()
  const handleAdd = () => {
    // this part will pass our input data towards backend
    axios.post('http://localhost:3001/add', { task: task }).then(result => console.log(result)).catch(error => console.log(error))
  }
  return (
    <div>
      <input type="text" name="" id="" placeholder='Write your task' onChange={(e) => { setTask(e.target.value) }} />
      <button type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create