import React from 'react'
import useEventListener from './useEventListener'

const useClickoutside = (ref, cb) => {
  useEventListener(
    'click',
    e =>{
      if(ref.current == null || ref.current.contains(e.target))
        return
      cb(e)
    },
    document
  )
}

export default useClickoutside