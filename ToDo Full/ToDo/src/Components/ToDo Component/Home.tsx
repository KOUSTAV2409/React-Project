import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get').then(result => setTodos(result.data)).catch(err => console.log(err))
    }, [])




    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update'+id).then(result =>console.log(result) ).catch(err => console.log(err))
    }

    return (
        <div>
            <h2>ToDo List</h2>
            <Create />


            {
                // Here the "todo" inside the map is a item of the todos array and has been used to show all todo item inside todos array inside a div
                // ternary operator has been used here if todos.length === 0 means that if there is not todo then the div h2 will show No record in the display and if there is a todo then it will map and show the item from the array

                todos.length === 0 ? <div><h2>No Record</h2></div> :
                    todos.map(todo => (
                        <div className='task flex gap-3'>
                            <div className="checkbox flex gap-3 items-center" onClick={() => handleEdit(todo._id)}>
                                <i className="fa-regular fa-square-check"></i>
                                <p>{todo.task}</p>
                            </div>
                            <div>
                                <span><i className="fa-solid fa-trash"></i></span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home