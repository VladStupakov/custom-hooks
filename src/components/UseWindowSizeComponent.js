import React from 'react'
import useWindowSize from '../hooks/useWindowSize'

const UseWindowSizeComponent = () => {

  const {width, height} = useWindowSize() 

  return (
    <div>{width} x {height}</div>
  )
}

export default UseWindowSizeComponent