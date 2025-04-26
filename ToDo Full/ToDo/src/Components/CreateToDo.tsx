import React, { useState } from 'react'

const CreateToDo = () => {
  const [task, setTask] = useState('')
  const [addButton, setAddButton] = useState([])

  const handleClick = () => {
    if (task.trim()) {
      setAddButton([...addButton, task]);
      setTask('')
    }
    else (alert("you have not added any task yet"))
  }

  const handleDelete = (index) => {
    // Remove the task at the specified index
    const updatedTasks = addButton.filter((_, i) => i !== index);
    setAddButton(updatedTasks);
  };
  return (
    <div>
      <h1 className='text-center font-bold text-2xl border rounded-md m-2 p-2'>Your ToDo</h1>

      <div className='m-2 gap-4'>
        <input type="text" placeholder='Enter your task :' value={task} onChange={(e) => { setTask(e.target.value) }} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ol className='m-2 list-decimal list-inside'>
        {addButton.map((item, index) => (
          <li key={index} className='flex justify-between items-center gap-4'>
            <span>{item}</span>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button>Update</button>
          </li>

        ))}
      </ol>
    </div>
  )
}

export default CreateToDo