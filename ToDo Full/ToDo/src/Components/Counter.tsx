// import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col items-centeri justify-center border"> 
            <h1>This is a Counter App</h1>
            <p onClick={() => { setCount(count + 1) }}>+</p>
            <p>Count : {count}</p>
            <p>-</p>
        </div>
    )
}

export default Counter