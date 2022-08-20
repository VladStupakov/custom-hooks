import React from 'react'
import useStateWithHistory from '../hooks/useStateWithHistory'

const UseStateWithHistoryComponent = () => {

  const [count, setCount, { history }] = useStateWithHistory(1)

  return (
    <>
      <div>{count}</div>
      <div>{history.join(', ')}</div>
      <button onClick={()=> setCount(count => count + 1)}>Increment</button>
      <button onClick={()=> setCount(count => count * 2)}>x2</button>
    </>

  )
}

export default UseStateWithHistoryComponent