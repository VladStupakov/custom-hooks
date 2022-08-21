import React, { useRef, useState } from 'react'
import useClickoutside from '../hooks/useClickoutside'

const UseClickOutsideComponent = () => {

  const [visibility, setVisibility] = useState(false)
  const elementRef = useRef()

  useClickoutside(elementRef, () => {
    if (visibility) {
      setVisibility(false)
    }
  })

  return (
    <div>
      <button onClick={(e) => {e.stopPropagation(); setVisibility(true)}}>Open</button>
      <div
        ref={elementRef}
        style={{
          display: visibility ? 'block' : 'none',
          backgroundColor: 'red',
          width: '200px',
          height: '200px',
          marginTop: '50px'
        }}
      >
        Text
      </div>
    </div>
  )
}

export default UseClickOutsideComponent