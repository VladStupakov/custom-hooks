import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce'

const UseDebounceComponent = () => {

    const [count, setCount] = useState(5)
    useDebounce(() => alert(count), 500, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() =>setCount(prev => prev +1)}>Increment</button>
        </div>
    )
}

export default UseDebounceComponent