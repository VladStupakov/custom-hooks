import React, { useRef } from 'react'
import useHover from '../hooks/useHover'

const UseHoverComponent = () => {

  const elementRef = useRef()
  const hovered = useHover(elementRef)

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered? 'red' : 'black',
        width: '200px',
        height: '200px',
        margin: '20px'
      }}
    >
    </div>
  )
}

export default UseHoverComponent