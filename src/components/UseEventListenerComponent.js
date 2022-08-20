import React, { useState } from 'react'
import useEventListener from '../hooks/useEventListener'

const UseEventListenerComponent = () => {

  const [key, setKey] = useState('')
  useEventListener('keydown', e=> {
    setKey(e.key)
  })

  return (
    <div>{key}</div>
  )
}

export default UseEventListenerComponent