import React, { useState } from 'react'
import usePrevious from '../hooks/usePrevious'

const UsePreviousComponent = () => {

  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  return (
    <div>
      <div>{`count: ` + count}</div>
      <div>{`previous count: ` + previousCount}</div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment
      </button>
    </div>
  )
}

export default UsePreviousComponent