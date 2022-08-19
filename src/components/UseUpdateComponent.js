import React, { useState } from 'react'
import { useUpdateEffect } from '../hooks/useUpdateEffect'

const UseUpdateComponent = () => {

    const [count, setCount] = useState(1)
    useUpdateEffect(() => alert(count), [count])

    // LOOKS LIKE ITS WORKS INCORRECTLY BECAUSE OF STRICT MODE BUT EVERYTHING IS OK

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>increment</button>
        </div>
    )
}

export default UseUpdateComponent