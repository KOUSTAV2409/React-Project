import { useState } from "react"

 
 
 const CreateToDo = () => {

  const [task,setTask]=useState('')
   return (
     <div>
      <h1 className="text-center border border-black rounded-md text-2xl font-semibold">your ToDo</h1>


      <input type="text" placeholder="Add your task" />
      <button>Add</button>

      <p></p>
     </div>
   )
 }
 
 export default CreateToDo