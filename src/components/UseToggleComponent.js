import React from 'react'
import useToggle from '../hooks/useToggle'

const UseToggleComponent = () => {

    const [value, toggleValue] = useToggle(false)

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() =>{toggleValue(false)}}>Set False</button>
            <button onClick={() =>{toggleValue(true)}}>Set True</button>
        </div>
    )
}

export default UseToggleComponent