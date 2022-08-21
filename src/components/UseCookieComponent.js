import React from 'react'
import useCookie from '../hooks/useCookie'

const UseCookieComponent = () => {

  const [value, update, remove] = useCookie('name', 'Vlad')

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => update('Vlad 1')}>Change name</button>
      <button onClick={remove}>remove name</button>
    </div>
  )
}

export default UseCookieComponent