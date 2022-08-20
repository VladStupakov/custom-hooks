import React, { useEffect, useState } from 'react'

const useObserver = (ref, margin = '0px') => {

  const [isVisivle, setIsVisible] = useState(false)

  useEffect(() =>{
    if(ref.current === null)
      return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {margin}
    )
    observer.observe(ref.current)
    return () =>{
      if(ref.current === null)
        return
      observer.unobserve(ref.current)
    }
  }, [ref.current, margin])

  return isVisivle
}

export default useObserver