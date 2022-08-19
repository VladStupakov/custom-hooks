import React, { useState } from 'react'

const useArray = (defaultValue) => {

  const [array, setArray] = useState(defaultValue)

  const push = (element) => {
    setArray(arr => [...arr, element])
  }

  const filter = (cb) => {
    setArray(arr => arr.filter(cb))
  }

  const update = (index, newValue) => {
    setArray(arr => [
      ...arr.slice(0, index),
      newValue,
      ...a.slice(index + 1, arr.length - 1)
    ])
  }

  const remove = (index) => {
    setArray(arr => [...arr.slice(0, index), ...a.slice(index + 1, arr.length - 1)])
  }

  const clear = () =>{
    setArray([])
  }

  return {array, set: setArray, push, filter, update, remove, clear}
}

export default useArray