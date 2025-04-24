import React from 'react'
import ToDo from './Components/ToDo'
import { Redirect } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='h-lvh w-screen flex justify-center items-center bg-gradient-to-r
from-blue-500
via-blue-700
to-blue-500'>
        <div className='border-2 flex flex-col justify-between items-center gap-8'>
            <h1 className='m-2 p-2 text-4xl font-bold'>Welcome to your own To-Do</h1>
            <div className='border flex justify-between items-center gap-6'>
                <button className='border m-2 p-2 rounded-md cursor-pointer font-bold text-2xl'>Create To-Do</button>
                <button className='border m-2 p-2 rounded-md cursor-pointer font-bold text-2xl'>Recent To-Do</button>
                <button className='border m-2 p-2 rounded-md cursor-pointer font-bold text-2xl'>Old To-do</button>
            </div>
        </div>
    </div>
  )
}

export default Landing