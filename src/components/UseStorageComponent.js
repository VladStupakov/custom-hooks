import React from 'react'
import { useLocalStorage, useSessionStorage } from '../hooks/useStorage'

const UseStorageComponent = () => {

  const [count, setCount, removeCount] = useSessionStorage('count', 0)

  const [count1, setCount1, removeCount1] = useLocalStorage('count', 10)

  return (
    <>
      <div>{count}</div>
      <div>{count1}</div>
      <button onClick={() =>setCount(c => c + 1)}>Increment count</button>
      <button onClick={() =>setCount1(c => c + 1)}>Increment count1</button>
      <button onClick={removeCount}>Remove count</button>
      <button onClick={removeCount1}>Remove count1</button>
    </>
  )
}

export default UseStorageComponent