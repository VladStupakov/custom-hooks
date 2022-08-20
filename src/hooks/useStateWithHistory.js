import React, { useCallback, useRef, useState } from 'react'

export default function useStateWithHistory(defaultValue, { maxLength = 10} = {} ) {

  const [value, setValue] = useState(defaultValue)
  const historyRef = useRef([value])

  const set = useCallback(
    v => {
      const resolvedValue = typeof v === 'function' ? v(value) : v
      if (historyRef.current[value.length - 1] !== resolvedValue) {
        historyRef.current.push(resolvedValue)
        while (historyRef.current.length > maxLength)
          historyRef.current.shift()
      }
      setValue(resolvedValue)
    }, [maxLength, value]
  )

  return [
    value,
    set,
    { history: historyRef.current }
  ]
}

