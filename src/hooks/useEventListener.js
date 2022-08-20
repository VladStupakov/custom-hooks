import React, { useEffect, useRef } from 'react'

const useEventListener = (event, cb, element = window) => {
  
  const callbackRef = useRef(cb)

  useEffect(() =>{
    callbackRef.current = cb
  }, [cb])

  useEffect(()=>{
    const handler = e => callbackRef.current(e)
    element.addEventListener(event, handler)

    return () => element.removeEventListener(event, handler)
  }, [event, element])

}

export default useEventListener