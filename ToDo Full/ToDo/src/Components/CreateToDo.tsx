import React, { useState } from 'react';
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const CreateToDo = () => {
  const [task, setTask] = useState('');
  const [addButton, setAddButton] = useState([]);

  const handleClick = () => {
    if (task.trim()) {
      setAddButton([...addButton, task]);
      setTask('');
    } else {
      alert("You have not added any task yet");
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = addButton.filter((_, i) => i !== index);
    setAddButton(updatedTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick()
    }
  }

  return (
    <div className='h-lvh w-screen flex items-center flex-col bg-gray-200'> {/* Added background color to entire page */}
      <h1 className='text-center font-bold text-2xl border rounded-md p-2 h-1/5 flex justify-center items-center w-full bg-blue-900 text-white'>
        Your ToDo
      </h1>

      <div>
        <div className='m-2 gap-4 flex'>
          <Input
            type="text"
            placeholder='Enter your task :'
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyPress}
            className='w-80'
          />
          <Button onClick={handleClick}>Add</Button>
        </div>

        <ol className="m-2 list-decimal list-inside space-y-2">
          {addButton.map((item, index) => (

            // https://stackoverflow.com/questions/25942417/display-flex-inside-li-element-hides-numbering?newreg=85df22e5bb89403ba185eb39f0672894

            <li key={index} className='lst'>
              <span className="flex-1">{item}</span>

              {/* delete button */}
              <button onClick={() => handleDelete(index)} className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21 c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CreateToDo;
