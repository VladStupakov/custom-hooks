import React, { useEffect, useRef } from 'react'

export const useUpdateEffect = (cb, deps) => {
    const firstRenderRef = useRef(true)

    useEffect(() =>{
        if(firstRenderRef.current){
            firstRenderRef.current = false
            return
        }
        return cb()
    }, deps)
}
