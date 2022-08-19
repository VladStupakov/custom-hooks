import React, { useEffect } from 'react'
import useTimeout from './useTimeout'

const useDebounce = (cb, delay, deps) => {
  const {reset, clear} = useTimeout(cb, delay)
  useEffect(reset, [...deps, reset])
  useEffect(clear, [])
}

export default useDebounce