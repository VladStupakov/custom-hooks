import React from 'react'
import useOnlineStatus from '../hooks/useOnlineStatus'

const UseOnlineStatusComponent = () => {

  const online = useOnlineStatus()
  
  return (
    <div>{online.toString()}</div>
  )
}

export default UseOnlineStatusComponent