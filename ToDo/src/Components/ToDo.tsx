// import React from 'react'
import { useEffect, useState } from 'react'


const ToDo = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const todo = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos")
                const jsonData = await response.json()
                setTodos(jsonData)

            } catch (error) {
                console.log(error)

            }
        }
        todo()
    }, [])

    const Card = ({ id, title }) => {
        return (
            <>
                <div className='h-40 w-44 border rounded-md'>
                    <h1 className='text-center'>Task Card {id}</h1>
                    <hr />

                    <div className='p-1'>
                    <p>Task : {id}</p>
                    <p>Task Title : {title}</p>
                    </div>

                </div>
            </>
        )
    }

    

    return (
        <>
            <div className="h-lvh w-full">
                <h1 className='text-center border-2 m-2 p-2 rounded-md text-2xl font-bold'>To-Do Application</h1>


                <div>
                    <h1 className='text-center border-2 m-2 p-1 rounded-md text-2xl font-bold'>
                        All Saved Task :
                    </h1>
                    <div className='flex flex-wrap justify-center gap-4'>
                    {todos.map(({ id, title }) => {
                        return (
                            <Card key={id} id={id} title={title} />

                        )
                    })}
                </div>
                </div>
            </div>
        
        </>
    )
}

export default ToDo