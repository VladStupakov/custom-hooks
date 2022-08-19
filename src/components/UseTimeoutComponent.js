import React, { useState } from 'react'
import useTimeout from '../hooks/useTimeout'

const UseTimeoutComponent = () => {

    const [count, setCount] = useState(1)
    const { clear, reset } = useTimeout(() => setCount(0), 2000)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={clear}>Clear timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}

export default UseTimeoutComponent